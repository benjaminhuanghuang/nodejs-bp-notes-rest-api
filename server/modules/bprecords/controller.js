import BPRecord from './model';

export const createBPRecord = async (req, res) => {
  const { lowPressure, highPressure } = req.body;
  const newRecord = new BPRecord({ lowPressure, highPressure });

  try {
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
    return res.status(201).json({
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
