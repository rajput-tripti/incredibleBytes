function main(params) {
  if (!params.consumable_till || !params.quantity) {
    return Promise.reject({ error: 'Please enter all details'});
  }

  return {
    doc: {
      createdAt: new Date(),
       name: params.name,
       contact: params.contact,
       food_type: params.food_type,
       food_description: params.food_description,
       quantity: params.quantity,
       prepared_at: params.prepared_at,
       consumable_till: params.consumable_till,
       shell_life: params.shell_life,
       address: params.address,
       pincode: params.pincode
       
    }
  };
}
