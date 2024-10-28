let shopItemsData = [
    {
    "id": 1,
    "name": "Modern Lounge Chair",
    "price": 109.95,
    "desc": "Chair",
    "img": "data:image/jpeg;base64,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",
    
}, {
    "id": 2,
    "name": "Ergonomic Office Chair ",
    "price": 22.3,
    "desc": "Chair ",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmQTxdiLa5otkYiNh2iuZ5xG-8Ign153eot1cl3WRNJA5i_yfwj1YjCk&s",
   
}, {
    "id": 3,
    "name": "Luxury Dining Chair",
    "price": 55.99,
    "desc": "Chair",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSflxv5axy6RPgQndyS0G09xHSWAE1WO1tg&s"
   
}, {
    "id": 4,
    "name": "Executive Chair",
    "price": 15.99,
    "desc": " Chair",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53_-ZTPm82hz5ah92RHVa_THqN2TADu3AaA&s"
    
}, {
    "id": 5,
    "name": "Trestle Table ",
    "price": 168,
    "desc": "Table",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_C74KbxKysFRVkowlbVkvCy6gpfLPaxDcEA&s"
    
}, {
    "id": 6,
    "name": "Chowki Table ",
    "price": 168,
    "desc": "Table",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZG_qfav_-nyizXxe7PEzUryz5RdhxtQA2A&s"
    
}, {
    "id": 7,
    "name": "Gateleg Table",
    "price": 9.99,
    "desc": "Table",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJh3z9S5XBDWPC8gpW4sHAwb1D8wQGzzS_vw&s"
  
}, {
    "id": 8,
    "name": "Work Table",
    "price": 10.99,
    "desc": "Table",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3cJQ9Z2jx3XSj4JL2YMJFWSce4upO3EmqA&s"
   
}
]