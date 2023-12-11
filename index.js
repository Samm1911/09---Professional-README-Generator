// This includes all the necessary packages for this terminal application --> inquirer and fs(file system)
const inquirer = require("inquirer");
const fs = require("fs");

// This is an array with objects for all the prompt questions
const questions = [
  {
    // The type is input
    type: "input",
    // the question
    message: "What is your project title?",
    // the description of the input
    name: "title",
  },
  {
    type: "input",
    message: "What is your project description (what, how and why)?",
    name: "description",
  },
  {
    type: "input",
    message: "What are your installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is your usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are your contribution guidelines?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are your test instructions?",
    name: "tests",
  },
  {
    // list to choose from the licenses
    type: "list",
    message: "What LICENSE would you like to choose?",
    name: "license",
    // All the licenses listed in an array as a choice
    choices: [
      "The MIT License",
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "BSD 2-Clause License",
      "CC0",
      "Attribution 4.0 International",
      "Attribution-ShareAlike 4.0 International",
      "Attribution-NonCommercial 4.0 International",
      "Attribution-NoDerivates 4.0 International",
      "Attribution-NonCommercial-NoDerivatives 4.0 International",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "GNU GPL v2",
      "GNU AGPL v3",
      "GNU LGPL v3",
      "GNU FDL v1.3",
      "The Hippocratic License 2.1",
      "The Hippocratic License 3.0",
      "IBM Public License Version 1.0",
      "ISC License (ISC)",
      "Mozilla Public License 2.0",
      "Attribution License (BY)",
      "Open Database License (ODbL)",
      "Public Domain Dedication and License (PDDL)",
      "The Perl License",
      "The Artistic License 2.0",
      "SIL Open Font License 1.1",
      "The Unlicense",
      "The Do What the Fuck You Want to Public License",
      "The zlib/libpng License",
    ],
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email adress?",
    name: "email",
  },
];

function licenseBadge(license) {
  // if else if condition, to input the right license badge based on the chosen license
  // output as an empty string
  let yourLicense = "";
  if (license === "The MIT License") {
    yourLicense =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0 License") {
    yourLicense =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost Software License 1.0") {
    yourLicense =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "BSD 3-Clause License") {
    yourLicense =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "BSD 2-Clause License") {
    yourLicense =
      "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "CC0") {
    yourLicense =
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (license === "Attribution 4.0 International") {
    yourLicense =
      "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
  } else if (license === "Attribution-ShareAlike 4.0 International") {
    yourLicense =
      "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
  } else if (license === "Attribution-NonCommercial 4.0 International") {
    yourLicense =
      "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
  } else if (license === "Attribution-NoDerivates 4.0 International") {
    yourLicense =
      "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
  } else if (
    license === "Attribution-NonCommmercial-ShareAlike 4.0 International"
  ) {
    yourLicense =
      "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
  } else if (
    license === "Attribution-NonCommercial-NoDerivatives 4.0 International"
  ) {
    yourLicense =
      "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
  } else if (license === "Eclipse Public License 1.0") {
    yourLicense =
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (license === "GNU GPL v3") {
    yourLicense =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU GPL v2") {
    yourLicense =
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (license === "GNU AGPL v3") {
    yourLicense =
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU LGPL v3") {
    yourLicense =
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "GNU FDL v1.3") {
    yourLicense =
      "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
  } else if (license === "The Hippocratic License 2.1") {
    yourLicense =
      "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
  } else if (license === "The Hippocratic License 3.0") {
    yourLicense =
      "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
  } else if (license === "IBM Public License Version 1.0") {
    yourLicense =
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "ISC License (ISC)") {
    yourLicense =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license === "Mozilla Public License 2.0") {
    yourLicense =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Attribution License (BY)") {
    yourLicense =
      "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
  } else if (license === "Open Database License (ODbL)") {
    yourLicense =
      "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
  } else if (license === "Public Domain Dedication and License (PDDL)") {
    yourLicense =
      "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
  } else if (license === "The Perl License") {
    yourLicense =
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else if (license === "The Artistic License 2.0") {
    yourLicense =
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else if (license === "SIL Open Font License 1.1") {
    yourLicense =
      "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
  } else if (license === "The Unlicense") {
    yourLicense =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else if (license === "The Do What the Fuck You Want to Public License") {
    yourLicense =
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  } else if (license === "The zlib/libpng License") {
    yourLicense =
      "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
  }
  // returns the chosen license
  return yourLicense;
}

// this will write, based on the filename and the following parameters, which we get from the prompt answers, will be used to create a README file
function writeToFile(
  fileName,
  {
    title,
    license,
    description,
    installation,
    usage,
    contribution,
    tests,
    github,
    email,
  }
) {
  // README content stored in a constant with template literals
  const content = `# ${title} 
${licenseBadge(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

This is a ${license} licensed product.

## Contribute

${contribution}

## Tests

${tests}

## Questions

Here is my Github profile to check out my other repositories: [My Github](https://github.com/${github})

Reach me also under my email address for additional questions: [My email](mailto:${email})`;

  // function from the fs is used to get the chosen input
  fs.writeFileSync(fileName, content);
}

// function that initializes app
// init uses the inquirer, which starts with the prompt, which uses the array of questions for the user
function init() {
  inquirer
    .prompt(questions)
    // out of that response, the response will be written in the 'sample-README.md'
    .then((response) => {
      writeToFile("sample-README.md", response);
    })
    // in case of an error, the error will be displayed in the terminal
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
