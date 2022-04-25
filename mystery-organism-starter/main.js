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
      const dnaBase = ['A', 'T', 'C', 'G'];
      const mutateIndexValue = element => element === mutateIndex;
      const indexOf = dnaBase.findIndex(mutateIndexValue);
      dnaBase.splice(indexOf,1);
      const replaceBase = dnaBase[Math.floor(Math.random()*3)];
      this.dna[randomFifteen] = replaceBase;
    },
    compareDNA(specimenToCompare) {
      let count = 0;
      for (let i = 0; i < 15; i++){
        if (specimenToCompare.dna[i] === this.dna[i]) {
          count++;
        } else count = count;
      } console.log(`Specimen #${this.speciesNum} and specimen #${specimenToCompare.speciesNum} have ` + ((count/15)*100).toFixed(2) + '% DNA in common.');
    },
    willLikelySurvive() {
      let surviveCount = 0
      for (let i=0; i< 15; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          surviveCount++;
        } else surviveCount = surviveCount;
      } if ((surviveCount/15) >= .60) return true;
      else return false;
    }
  }
}

const toStudy = () => {
  let studyArray = [];
  for (let i=1; studyArray.length != 30; i++) {
    let temp = pAequorFactory(i, mockUpStrand());
    if (temp.willLikelySurvive() === true) {
      studyArray.push(temp);
    }
  } return studyArray;
};

console.log(toStudy().length);