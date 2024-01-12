document.addEventListener('DOMContentLoaded', function () {
  var stateDropdown = document.getElementById('stateDropdown');
  var jobTypeDropdown = document.getElementById('jobTypeDropdown');
  var resultTextbox = document.getElementById('resultTextbox');
  var copyButton = document.getElementById('copyButton');

  // Event listener for the copy button
  copyButton.addEventListener('click', function () {
    // Get the selected state and job type
    var selectedState = stateDropdown.value;
    var selectedJobType = jobTypeDropdown.value;

    // Customize the result based on the selected state and job type
    var result = getResultText(selectedState, selectedJobType);

    // Display the result in the textbox
    resultTextbox.value = result;

    // Copy the result to the clipboard
    resultTextbox.select();
    document.execCommand('copy');
  });

  // Function to customize the result based on the selected state and job type
  function getResultText(state, jobType) {
    // Sample logic for a few combinations, you can expand this based on your needs
    switch (jobType) {
      case 'adaptive-pe-teacher':
        return getLicenseInfo('Adaptive PE Teacher', state);
      case 'speech-language-pathologist':
        return getLicenseInfo('Speech Language Pathologist', state);
      case 'special-education-teacher':
        return getLicenseInfo('Special Education Teacher', state);
      // Add more cases for other job types

      default:
        return 'Customize this message for other state and job type combinations.';
    }
  }

  // Function to get license and educator credential information
  function getLicenseInfo(jobType, state) {
    // Sample logic, replace with your actual data
    switch (state) {
      case 'california':
        return 'License: Required / Educator Credential Needed: Yes for ' + jobType + ' in California.';
      case 'new-york':
        return 'License: Required / Educator Credential Needed: Yes for ' + jobType + ' in New York.';
      // Add more cases for other states

      default:
        return 'License information not available for ' + jobType + ' in ' + state + '.';
    }
  }

  // Sort job types alphabetically
  sortJobTypes();
  
  function sortJobTypes() {
    var options = Array.from(jobTypeDropdown.options);
    options.sort(function (a, b) {
      return a.text.localeCompare(b.text);
    });

    // Remove existing options
    jobTypeDropdown.innerHTML = '';

    // Add sorted options back to the dropdown
    options.forEach(function (option) {
      jobTypeDropdown.add(option);
    });
  }
});
