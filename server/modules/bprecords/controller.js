import BPRecord from './model';

export const createBPRecord= async (req, res) => {
  const { lowPressure, highPressure } = req.body;
  const newRecord = new BPRecord({ lowPressure, highPressure, Date() });

  try {
    return res.status(201).json({
      bpRecord: await newRecord.save(),
    });
  } catch (e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with Meetup',
    });
  }
};

export const deleteBPRecord = async (req, res) => {
  try {
    return res.status(200).json({
      meetups: await Meetup.find({}),
    });
  } catch (e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with Meetup',
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
      message: 'Error with Meetup',
    });
  }
};