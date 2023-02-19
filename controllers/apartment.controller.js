import ApartmentModel from '../models/Apartment.js';

export const create = async (req, res) => {
  try {
    const apartment = await new ApartmentModel(req.body).save();

    res.json(apartment._doc)
  } catch(err) {
    console.error(err);
    res.status(500).json({
      message: 'Problem with creating the apartment'
    })
  }
}

export const update = async (req, res) => {
  try {
    const apartmentId = req.params.id;

    await ApartmentModel.updateOne({ _id: apartmentId }, req.body);

    res.json({
      success: true
    });
  } catch(err) {
    console.error(err);
    res.status(500).json({
      message: 'Problem with updating the apartment'
    })
  }
}

export const getAll = async (req, res) => {
  const { price, rooms } = req.query;
  
  try {
    const apartments = await ApartmentModel
    .find(rooms && {rooms})
    .sort(price && {price})

    res.json(apartments)
  } catch(err) {
    console.error(err);
    res.status(500).json({
      message: 'Problem with getting apartments'
    })
  }
};

export const removeOne = async (req, res) => {
  try {
    const apartmentId = req.params.id;

    ApartmentModel.findOneAndDelete(
      {  _id: apartmentId },
      (err) => {
        if (err) {
          return res.status(500).json({
            message: 'Problem with deleting the apartment'
          })
        }

        res.json({
          success: true
        });
      }
    )
  } catch(err) {
    console.error(err);
    res.status(500).json({
      message: 'Problem with deleting the apartment'
    })
  }
};
