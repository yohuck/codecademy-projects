// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (speciesNum, strand) => {
  return {
    speciesNum: speciesNum,
    dna: strand,
    mutate() {
      const randomFifteen = Math.floor(Math.random()*14);
      let mutateIndex = this.dna[randomFifteen];
      console.log(this.dna);
      console.log(randomFifteen);
      console.log(mutateIndex);
      const dnaBase = ['A', 'T', 'C', 'G'];
      console.log(dnaBase);
      const mutateIndexValue = element => element === mutateIndex;
      const indexOf = dnaBase.findIndex(mutateIndexValue);
      console.log (indexOf);
      dnaBase.splice(indexOf,1);
      console.log(dnaBase);
      const replaceBase = dnaBase[Math.floor(Math.random()*3)];
      console.log(replaceBase);
      this.dna[randomFifteen] = replaceBase;
      console.log(this.dna);
    }
  }
}

let test = pAequorFactory(1,mockUpStrand());
console.log(test)
test.mutate();
console.log(test);
test.mutate();
console.log(test)