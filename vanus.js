const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    { nimi: "Kristo Kuurits", isikukood: "50604177055"}
  ];
  

  inimesteAndmed.forEach((inimene) => {

    function arvutaSunniaegJaVanus(isikukood) {
      const aasta = parseInt(isikukood.substr(1, 2));
      const kuu = parseInt(isikukood.substr(3, 2));
      const päev = parseInt(isikukood.substr(5, 2));
  
      const tänaneKuupäev = new Date();
      const sünniaasta = aasta < 22 ? 2000 + aasta : 1900 + aasta;
  
      const sünnikuupäev = new Date(sünniaasta, kuu - 1, päev);
      const vanus = tänaneKuupäev.getFullYear() - sünnikuupäev.getFullYear();
  
      return { sünniaeg: sünnikuupäev.toLocaleDateString(), vanus: vanus };
    }
  
    const { sünniaeg, vanus } = arvutaSunniaegJaVanus(inimene.isikukood);
    inimene.sünniaeg = sünniaeg;
    inimene.vanus = vanus;
  });
  

  inimesteAndmed.forEach((inimene) => {
    console.log(`${inimene.nimi}: Sünniaeg - ${inimene.sünniaeg}, Vanus - ${inimene.vanus}`);
  });