let divineItems = [];

function mintDivieItems(name, deity, about, imageUrl) {
    const divineItms = {
        name : name,
        deity : deity,
        about : about,
        imageUrl : imageUrl
    };
    divineItems.push(divineItms);
}

function listDivineitems() {
    for (let i=0; i<divineItems.length; i++) {
        const divineItms = divineItems[i];
        console.log("Name : " + divineItms.name + "\nDeity : " + divineItms.deity + 
                    "\nAbout : " + divineItms.about + "\nIllusterate URL : " + divineItms.imageUrl);
        console.log();            
    }
}

function getTotalDivineItems() {
    return divineItems.length;
}

mintDivieItems("Sudarshana Chakra", "Shri Hari", "the Sudarshana Chakra is stated to be Vishnu's symbol as the wheel of time", "https://www.google.com/imgres?q=sudarshana%20chakra%20according%20to%20vedas&imgurl=https%3A%2F%2Fcdn.exoticindia.com%2Farticlebodies%2Ffiles%2F1707117160.jpg&imgrefurl=https%3A%2F%2Fwww.exoticindiaart.com%2Farticle%2Fsudarshan-chakra%2F&docid=I7Dd5w6b3LItfM&tbnid=Xl0IEhYiHY9c4M&vet=12ahUKEwjZy7Wzta2GAxUfxTgGHdQaCtgQM3oECD0QAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwjZy7Wzta2GAxUfxTgGHdQaCtgQM3oECD0QAA");
mintDivieItems("Shank", "Shri Hari", "Shank represents divine sound, purity, prosperity, and the protective power of Lord Vishnu", "https://www.google.com/imgres?q=shank%20shri%20hari&imgurl=https%3A%2F%2Fsriharipujastore.com%2Fwp-content%2Fuploads%2F2022%2F10%2FVamavarthi-Left-Hand-Sankh-5-Inch-Edampuri-Shank-S9035.jpeg&imgrefurl=https%3A%2F%2Fsriharipujastore.com%2Fproduct%2Fvamavarthi-left-hand-sankh-5-inch-edampuri-shank-s9035%2F&docid=YH7JEMzlS7svMM&tbnid=GUrWNvlIBywwGM&vet=12ahUKEwis48n7t62GAxVT3TgGHVrqBdsQM3oECGQQAA..i&w=1500&h=1500&hcb=2&ved=2ahUKEwis48n7t62GAxVT3TgGHVrqBdsQM3oECGQQAA");
mintDivieItems("Kaumodaki", "Shri Hari", "Kaumodaki is the gadā (mace) of the Hindu deity Vishnu", "https://www.google.com/imgres?q=the%20gad%C4%81%20(mace)&imgurl=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F634e391d8751ab4059073d65-exotic-india-gada-mace.jpg&imgrefurl=https%3A%2F%2Fwww.ubuy.co.in%2Fproduct%2F2C59TRNE-exotic-india-gada-mace&docid=4QUpPJdHU4cN-M&tbnid=e8A_YU_LUfVbnM&vet=12ahUKEwjsveS7tq2GAxVRzzgGHcMuBokQM3oECGQQAA..i&w=1478&h=411&hcb=2&ved=2ahUKEwjsveS7tq2GAxVRzzgGHcMuBokQM3oECGQQAA");
mintDivieItems("Lotus Flower", "Shri Hari", "The lotus represents spiritual enlightenment, beauty, fertility, purity, prosperity and eternity", "https://www.google.com/imgres?q=what%20is%20lotus%20flower%20according%20to%20hindu%20mythology&imgurl=https%3A%2F%2Fqph.cf2.quoracdn.net%2Fmain-qimg-dfc55cb80a5eff68d43d478f8ab2545b-lq&imgrefurl=https%3A%2F%2Fwww.quora.com%2FWhat-is-the-importance-of-lotus-in-Hinduism&docid=l7mNcxVIh-2JbM&tbnid=nFQc8FAiDHfd8M&vet=12ahUKEwj22rzHt62GAxUqwTgGHQ1aBUoQM3oECH0QAA..i&w=602&h=784&hcb=2&ved=2ahUKEwj22rzHt62GAxUqwTgGHQ1aBUoQM3oECH0QAA");

listDivineitems();

console.log("Total number of items : " + getTotalDivineItems());
