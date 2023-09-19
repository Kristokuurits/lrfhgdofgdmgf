const Toode = { Nimetus: "Piim", hind: 2.70, kogus: 2 };

console.log(Toode);
console.log(Toode.Nimetus);
console.log(Toode.hind);
console.log(Toode.kogus);

const Ostukorv = {
  Toode: [
    { Nimetus: "paprikas", hind: 1.20, kogus: 1 },
    { Nimetus: "jäätis", hind: 1.40, kogus: 1 },
    { Nimetus: "kohv", hind: 5.80, kogus: 2 },
  ],
};

function koguSumma() {
  let summa = 0;
  for (let i = 0; i < Ostukorv.Toode.length; i++) {
    summa += Ostukorv.Toode[i].hind * Ostukorv.Toode[i].kogus;
  }
  return summa;
}

console.log('Ostukorvi kogu summa:', koguSumma());




const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];
  
function korraldaNimed(nimed) {
    return nimed.map(nimi => {
      const [eesnimi, perekonnanimi] = nimi.split(' ');
      return `${eesnimi.charAt(0).toUpperCase()}${eesnimi.slice(1)} ${perekonnanimi.charAt(0).toUpperCase()}${perekonnanimi.slice(1).toLowerCase()}@tthk.ee`;
    });
  }  
  
  function otsiNimi(nimi, nimed) {
    const leitudNimed = nimed.filter(n => n.toLowerCase().includes(nimi.toLowerCase()));
    if (leitudNimed.length > 0) {
      console.log("nimed leitud:");
      leitudNimed.forEach(n => console.log(n));
    } else {
      console.log("Nime ei leitud.");
    }
  }
  

  const korraldatudNimed = korraldaNimed(nimed);
  console.log("Korraldatud nimed:");
  korraldatudNimed.forEach(n => console.log(n));
  
  otsiNimi("kaidi", nimed);
  otsiNimi("mari", nimed);
  otsiNimi("juhan", nimed);
  

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
  
  