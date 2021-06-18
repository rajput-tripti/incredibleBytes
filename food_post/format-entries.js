
function main(params) {
  return {
    entries: params.rows.map((row) => { return {
      name: row.doc.name,
      createdAt: row.doc.createdAt,
      contact: row.doc.contact,
      food_type: row.doc.food_type,
      food_description: row.doc.food_description,
      quantity: row.doc.quantity,
      prepared_at: row.doc.prepared_at,
      consumable_till: row.doc.consumable_till,
      shell_life: row.doc.shell_life,
      address: row.doc.address,
      pincode: row.doc.pincode
    }})
  };
}
