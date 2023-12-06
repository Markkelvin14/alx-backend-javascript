// task_5/js/main.ts

// Define the interfaces
interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits: number = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'major' };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits: number = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'minor' };
}
