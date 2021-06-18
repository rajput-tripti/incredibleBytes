function main(params) {
  if (!params.quantity) {
    return Promise.reject({ error: 'Please enter all details'});
  }

  return {
    doc: {
      createdAt: new Date(),
       name: params.name,
       contact: params.contact,
       waste_description: params.waste_description,
       quantity: params.quantity,
       available_till: params.available_till,
       address: params.address,
       pincode: params.pincode
       
    }
  };
}
