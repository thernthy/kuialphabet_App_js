// Initial array with one objectc
export  const Words = [
    {
      kui_lang: 'ភាសាកួយន្ទ័រ',
      kui_lang2: 'ភាសាកួយអ្ទ្រើ',
      english_lang: 'English',
      khmer_lang: 'ភាសាខ្មែរ',
      common_used: 50,
    }
  ];
  
  // Function to create a new object with a different common_used value
  function createWordObject(commonUsedValue) {
    return {
      kui_lang: 'ភាសាកួយន្ទ័រ',
      kui_lang2: 'ភាសាកួយអ្ទ្រើ',
      english_lang: 'English',
      khmer_lang: 'ភាសាខ្មែរ',
      common_used: commonUsedValue,
    };
  }
  
  // Number of times to duplicate the object
  const numberOfDuplicates = 15;
  
  // Generate new objects with different common_used values
  for (let i = 1; i < numberOfDuplicates; i++) {
    // Generate a random number between 1 and 100 for common_used
    const randomCommonUsed = Math.floor(Math.random() * 100) + 1;
    
    // Create a new object with the random common_used value
    const newWordObject = createWordObject(randomCommonUsed);
    
    // Add the new object to the Words array
    Words.push(newWordObject);
  }
  
  