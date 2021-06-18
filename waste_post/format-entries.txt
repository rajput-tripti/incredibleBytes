function main(params) {
  return {
    entries: params.rows.map((row) => { return {
      name: row.doc.name,
      createdAt: row.doc.createdAt,
      contact: row.doc.contact,
      quantity: row.doc.quantity,
      available_till: row.doc.available_till,
      waste_description: row.doc.waste_description,
      address: row.doc.address,
      pincode: row.doc.pincode
    }})
  };
}