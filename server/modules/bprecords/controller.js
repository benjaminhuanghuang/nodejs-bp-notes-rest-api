import BPRecord from './model';

export const createBPRecord = async (req, res) => {
  const { lowPressure, highPressure } = req.body;
  const newRecord = new BPRecord({ lowPressure, highPressure });

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
      message: 'Error with deleting Meetup',
    });
  }
};

export const getBPRecords = async (req, res) => {
  const { startDate, endDate } = req.body;
  const query = {
    createdAt: {
      $gte: new Date(startDate),
      $lt: new Date(endDate).setDate(new Date(endDate).getDate() + 1),
    },
  };
  try {
    return res.status(200).json({
      bpRecords: await BPRecord.find(query),
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
