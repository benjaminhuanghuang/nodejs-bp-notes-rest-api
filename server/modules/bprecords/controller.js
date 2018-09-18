import BPRecord from './model';

export const createBPRecord = async (req, res) => {
  const { lowPressure, highPressure, userId } = req.body;
  const newRecord = new BPRecord({ lowPressure, highPressure, user: userId });

  try {
    // 201 The request has been fulfilled, resulting in the creation of a new resource
    return res.status(201).json({
      bpRecord: await newRecord.save(),
    });
  } catch (e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with creating BRCecord',
    });
  }
};

export const deleteBPRecord = async (req, res) => {
  try {
    const id = req.params.id;
    // 204 No Content The server successfully processed the request and is not returning any content
    return res.status(202).json({
      bpRecord: await BPRecord.findByIdAndRemove({ _id: id }),
    });
  } catch (e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with deleting BP records',
    });
  }
};

export const deleteAllBPRecord = async (req, res) => {
  try {
    // 204 No Content The server successfully processed the request and is not returning any content
    return res.status(202).json({
      result: await BPRecord.deleteMany({}),
    });
  } catch (e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with deleting BP records',
    });
  }
};

export const getBPRecords = async (req, res) => {
  const { startUTC, endUTC, userId } = req.body;
  const query = {
    createdAt: {
      $gte: new Date(startUTC),
      $lt: new Date(endUTC),
    },
    user: userId,
  };
  try {
    return res.status(200).json({
      // -1 to specify descending order.
      bpRecords: await BPRecord.find(query).sort({ createdAt: -1 }),
    });
  } catch (e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with fetching BPRecords',
    });
  }
};

export const getChartData = async (req, res) => {
  const { startUTC, endUTC, userId } = req.body;
  try {
    return res.status(200).json({
      bpRecords: await BPRecord.aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(startUTC),
              $lt: new Date(endUTC),
            },
            user: userId,
          },
        },
        { $sort: { createdAt: -1 } },
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
            average_low: { $avg: '$lowPressure' },
            average_high: { $avg: '$highPressure' },
          },
        },
      ]),
    });
  } catch (e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with fetching BPRecords',
    });
  }
};

export const getAllBPRecords = async (req, res) => {
  try {
    return res.status(200).json({
      bpRecords: await BPRecord.find({}),
    });
  } catch (e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with BPRecord',
    });
  }
};
