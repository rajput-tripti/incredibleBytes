function main(params) {
  return {
    entries: params.rows.map((row) => { return {
      name: row.doc.name,
      email: row.doc.email,
      contact: row.doc.contact,
      type: row.doc.type,
      address: row.doc.address,
      pincode: row.doc.pincode,
      city: row.doc.city,
	  password: row.doc.password
    }})
  };
}
