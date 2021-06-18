function main(params) {
  if (!params.name || !params.email || !params.contact || !params.address || !params.pincode || !params.city || !params.password) {
    return Promise.reject({ error: 'Please enter all details'});
  }

  return {
    doc: {
      createdAt: new Date(),
       name: params.name,
       email: params.email,
       contact: params.contact,
       type: params.type,
       address: params.address,
       pincode:params.pincode,
       city: params.city,
	   password: params.password
       
    }
  };
}
