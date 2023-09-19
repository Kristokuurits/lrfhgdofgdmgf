const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];
  
  function korraldaNimed(nimed) {
    return nimed.map(nimi => {
      const [eesnimi, perekonnanimi] = nimi.split(' ');
      return `${eesnimi.charAt(0).toUpperCase()}${eesnimi.slice(1)} ${perekonnanimi.toLowerCase()}@tthk.ee`;
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