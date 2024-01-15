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
    var qual = 'Qualifications: \n';
    switch (state.toLowerCase() + jobType.toLowerCase()) {
   
    //Adaptive PE Teachers 
            
        case 'alabamateacher - adaptive pe':
            return qual + 'Teaching Licensure in P-12 in Physical Education';
        case 'alaskateacher - adaptive pe':
            return qual + 'Teaching Credential';
        case 'arizonateacher-adaptive pe':
        return 'Qualifications: Physical Education Teaching Credential';
        case 'arkansasteacher-adaptive pe':
        return qual + 'Physical Education Teacher License';
      case 'californiateacher - adaptive pe':
        return qual + 'Adaptive Physical Education Teaching Credential';
      case 'coloradoteacher - adaptive pe':
        return qual+ 'Professional Teacher Licnse with Physical Education (K-12) Endorsement';
      case 'connecticutteacher - adaptive pe':
        return qual + 'Physical Education Teaching License';
      case 'delawareteacher - adaptive pe':
        return qual + 'Physical Education Teacher License (Grades K-12)';
      case 'dcteacher -adaptive pe':
        return qual + 'Health & Physical Education Teaching Credential \n Physical Education Teaching Credential';
      case 'floridateacher - adaptive pe':
        return qual + 'Physical Education Teacher License';
      case 'georgiateacher - adaptive pe':
            return qual + 'Halth & Physical Education Teaching Credential or, \n Special Edication Physical Health Disabilities Consultative (P-12) or, \n Special Education Physical Health & Disabilities Endorsement';
        case 'hawaiiteacher - adaptive pe':
            return qual + 'Physical Education Teaching Credential';
        case 'idahoteacher - adaptive pe':
            return qual + 'Physical Education Teaching Credential';
        case 'illinoisteacher - adaptive pe':
            return qual + 'Professional Educator License with Adaptive Physical Education Endorsement';
        case 'indianateacher - adaptive pe':
            return qual + 'Adaptive Physical Education Teaching License';
        case 'iowateacher - adaptive pe':
            return qual + 'Intital, Standard, or Master Teaching License';
        case 'kansasteacher - adaptive pe':
            return qual + 'Physical Education Teaching Certificate';
        case 'kentucyteacher - adaptive pe':
            return qual + 'Elementary/Middle/ or Secondary School Teaching Credential wih Physical Education Specialization';
        case 'louisianateacher - adaptive pe':
            return qual + 'Type A, B, C Level 1, 2, or 3 Physical Education Certificate with Adapted Physical Education Add-On';
        case 'maineteacher - adaptive pe':
            return qual + 'Adapted Physical Education K-12 Certificate';
        case 'marylandteacher - adaptive pe':
            return qual +'Teaching License with Physical Education Specialty Area';
        case 'massachusettsteacher - adaptive pe':
            return qual + 'Physical Education Teacher License (PreK-8, or 5-12) or \n Physical Therapist License';
        case 'michiganteacher - adaptive pe':
            return qual + 'Standard or Professional Teaching Certificate with an endorsement in Physical Education or Special Education';
        case 'minnesotateacher - adaptive pe':
            return qual + 'Physical Education License with Adapted Physical Education Endorsement';
        case 'mississippiteacher - adaptive pe':
            return qual + 'Special Education Teaching Credential or \n Physical Education Teaching Credential';
        case 'missouriteacher - adaptive pe':
            return qual + 'Physical Education Teaching License or \n Special Education License';
        case 'montanateacher - adaptive pe':
            return qual + 'Teaching Certificate with any of the following endorsements:\n Early Childhood \nElementary\nHealth Enchancement\nMiddle Grades\nSpecial Education\nHealth & Physical Education\nPhysical Education';
        case 'nebraskateacher - adaptive pe':
            return qual + 'Teaching License with endorsements in: \n Health & Physical Education or \nSpecial Education - Adaptive PE';
        case 'nevadateacher - adaptive pe':
            return qual + 'Teaching License with Physical Education Endorsement or Elementary/Secondary License or\n Special Education Teaching License';
        case 'new hampshireteacher - adaptive pe':
            return qual + 'Physical Education or Special Education Teaching Certificate';
        case 'new jerseyteacher - adaptive pe':
            return qual + 'Physical Education Teaching Credential or Special Education Teaching Crednetial';
        case 'new mexicoteacher - adaptive pe':
            return qual + 'Special Education Teaching Certificate';
        case 'new yorkteacher - adaptive pe':
            return qual + 'Physical Education Teaching Certificate';
        case 'north carolinateacher - adaptive pe':
            return qual + 'Physical Education Teaching Credential';
        case 'north dakotateacher - adaptive pe':
            return qual + 'Physical Education or Special Education Teaching License';
        case 'ohioteacher - adaptive pe':
            return qual + 'Physical Education Teaching License with Adaptive Physical Education Endorsement';
        case 'oklahomateacher - adaptive pe':
            return qual + 'Physical Education/Safety Teaching Credential';
        case 'oregonteacher - adaptive pe':
            return qual + 'Teaching License with either:\n Physical Education Endorsement\nAdaptive PE Specialization';
        case 'pennslyvaniateacher - adaptive pe':
            return qual + 'Health & Physical Education Teaching Certificate';
        case 'rhode islandteacher - adaptive pe':
            return qual + 'Adapted Physical Education Teacher Certificate';
        case 'south carolinateacher - adaptive pe':
            return qual + 'Educator Certificate with either endorsement: \n Physical Education\nHealth & Physical Education';
        case 'south dakotateacher - adaptive pe':
            return qual + ' Teaching License with K-12 Adaptive Physical Education Endorsement';
        case 'tennesseeteacher - adaptive pe':
            return qual + 'Teaching License with Physical Education K-12 Endorsement';
        case 'texasteacher - adaptive pe':
            return qual + 'Physical Education Teacher or Special Education Teacher Certificate';
        case 'utahteacher - adaprtive pe':
            return qual + 'Special Education Teaching Credential with Adapted Physical Education Endorsement';
        case 'vermontteacher - adaptive pe':
            return qual + 'Teaching Certificate with Physical Education Endorsement';
        case 'virginiateacher - adaptive pe':
            return qual + 'Teaching Credential with Health & Adapted Physical Education Endorsement';
        case 'washingtonteacher - adaptive pe':
            return qual + 'Teaching Certificate with Health & Fitness Endorsement';
        case 'wisconsinteacher adaptive - pe':
            return qual + 'Physical Education Teacher or Adapted Physical Education Teacher License';
        case 'wyomingteacher - adaptive pe':
            return qual + 'Educator License with Adaptive Physical Education Endorsement';
    
      // AT Specialist 
        case 'californiaassistive technology specialist':
            return qual + 'Education Specaialist - Physically Impaired Authorization\nEducation Specialist-  Orthopedic Impairment Authorization\nEducation Specialist - Moderate/Severe Disabilities\n Or Licensed to practice in: Occupational Therapy \nPhysical Therapy, \nor Speech Pathology with CTC Credential';
        case 'wisconsinassistive technology specialsit':
            return qual + 'Special Education Teaching Credential with Assistive Technology Supplement';
    
    //Audiologist 
            
        case 'alabamaaudiologist':
            return qual + 'Audiologist License';
        case 'alaskaauiologist':
            return qual + 'Audiologist License and Type C Special Services Certificate with Audiology Endorsement';
        case 'arizonaaudiologist':
            return qual + 'Audiologist License';
        case 'arkansasaudiologist':
            return qual + 'Audiologist License';
        case 'californiaaudiologist':
            return qual + 'Audiologist License and Clinical / Rehabilitative Services Credential';
        case 'coloradoaudiologist':
            return qual + 'Audiologist License and Special Service Provider License with School Audiologist Endorsement';
        case 'connecticutaudiologist':
            return qual + 'Audiologist License';
        case 'delawareaudiologist':
            return qual + 'Audiologist License';
        case 'dcaudiologist':
            return qual + 'Audiologist License and School Service Provier Credential with School Audiologist Endorsement';
        case 'floridaudiologist':
            return qual + 'Audiologist License';
        case 'georgiaaudiologist':
            return qual + 'Audologist License and Professional Standards Commission Certificate in Audiology (P-12)'
        case 'hawaiiaudiologist':
            return qual + 'Audiologist License';
        case 'idahoaudiologist':
            return qual + 'Audiologist License and Pupil Service Staff Certificate - Audiology Endorsement';
        case 'illinoisaudiologist':
            return qual + 'Audiologist License';
        case 'indianaaudiologist':
            return qual + 'Audiologist License';
        case 'iowaaudiologist':
            return qual + 'Audiologist and Statement of Professional Recognition from Board of Educational Examiners (BOEE)';
        case 'kansasaudiologist':
            return qual + 'Audiologist License';
        case 'kentucyaudiologist':
            return qual + 'Audiologist License';
        case 'louisianaaudiologist':
            return qual + 'Audiologist License and Ancillary Services Certificate';
        case 'maineaudiologist':
            return qual + 'Audiologist License';
        case 'marylandaudiologist':
            return qual + 'Audiologist License';
        case 'massachusettsaudiologist':
            return qual + 'Audiologist License';
        case 'michiganaudiologist':
            return qual + 'Audiologist License';
        case 'minnesotaaudiologist':
            return qual + 'Audiologist License';
        case 'mississippiaudiologist':
            return qual + 'Audiologist License and Educator License with Audiologist Endorsement';
        case 'missouriaudiologist':
            return qual + 'Audiologist License';
        case 'montanaaudiologist':
            return qual + 'Audiologist License';
        case 'nebraskaaudiologist':
            return qual + 'Audiologist License and Special Services Standard Certificate with Audiologist Endorsement';
        case 'nevadaaudiologist':
            return qual + 'Audiologist License and Teaching Certificarte with Audiology Endorsmeent';
        case 'new hampshireaudiologist':
            return qual + 'Audilogist License';
        case 'new jerseyaudiologist':
            return qual + 'Audiologist License';
        case 'new mexicoaudiologist':
            return qual + 'Audiologist License and Instructional Support Provider (Audilogist) Credential';
        case 'new yorkaudiologist':
            return qual + 'Audiologist License';
        case 'north carolinaaudiologist':
            return qual +'Audiologist License and School Audiologist License (Special Service Personnel)';
        case 'north dakotaaudiologist':
            return qual + 'Audiologist License';
        case 'ohioaudiologist':
            return qual + 'Audiologist License and Pupil Service License, or ODE Registration';
        case 'oklahomaaudiologist':
            return qual + 'Audiologist License';
        case 'oregonaudiologist':
            return qual + 'Audilogist License';
        case 'pennslyvaniaaudiologist':
            return qual + 'Audiologist License';
        case 'rhode islandaudiologist':
            return qual + 'Audiologist License';
        case 'south carolinaaudiologist':
            return qual + 'Audiologist License';
        case 'south dakotaaudiologist': 
            return qual + 'Audiologist Licernse';
        case 'tennesseeaudiologist':
            return qual + 'Audiologist License and Teaching Credential with School Audiologist Endorsement';
        case 'texasaudiologist':
            return qual + 'Audiologist License';
        case 'utahaudiologist':
            return qual + 'Audiologist License and Teaching License with Audiology Concentration';
        case 'vermontaudiologist':
            return qual + 'Audiologist License';
        case 'virginiaaudiologist':
            return qual + 'Audiologist License';
        case 'washingtonaudiologist':
            return qual + 'Audiologist License and Educational Staff Associate (ESA) Credential with Audiologist Endorsement';
        case 'west virginiaaudiologist':
            return qual + 'Audiologist License';
        case 'wisconsinaudiologist':
            return qual + 'Audiologist License and School Audiologist Certificate';
        case 'wyomingaudiologist':
            return qual + 'Audiologist License';
    //COTA 
        case 'alabamacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'alaskacota':
            return qual + 'Occupational Therapsit Assistant License';
        case 'arizonacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'arkansascota':
            return qual + 'Occupational Therapist Assistant License';
        case 'californiacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'coloradocota':
            return qual + 'Occupational Therapist Assistant License';
        case 'connecticutcota':
            return qual + 'Occupational Therapist Assistant License';
        case 'delawarecota':
            return qual + 'Occupational Therapist Assistant License';
        case 'dccota':
            return qual + 'Occupational Therapist Assistant License';
        case 'floridacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'georgiacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'hawaiicota':
            return qual + 'Occupational Therapist Assistant License';
        case 'idahocota':
            return qual + 'Occupational Therapist Assistant License';
        case 'illinoiscota':
            return qual + 'Occupational Therapist Assistant License';
        case 'indianacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'iowacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'kansascota':
            return qual + 'Occupational Therapist Assistant License';
        case 'kentuckycota':
            return qual + 'Occupational Therapist Assistant License';
        case 'louisianacota':
            return qual + 'Occupational Therapist Assistant License and Ancillary Occupational Therapist Assistant Credential';
        case 'mainecota':
            return qual + 'Occupational Therapist Assistant License';
        case 'marylandcota':
            return qual + 'Occupational Therapist Assistant License';
        case 'massachuettscota':
            return qual + 'Occupational Therapist Assistant License';
        case 'michigancota':
            return qual + 'Occupational Therapist Assistant License';
        case 'minnesotacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'mississippicota':
            return qual + 'Occupational Therapist Assistant License';
        case 'missouricota':
            return qual + 'Occupational Therapist Assistant License';
        case 'montanacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'nebraskacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'nevadacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'new hampshirecota':
            return qual + 'Occupational Therapist Assistant License';
        case 'new jserseycota':
            return qual + 'Occupational Therapist Assistant License';
        case 'new mexicocota':
            return qual + 'Occupational Therapist Assistant License and \n PED License - Instructional Support Provider (Occupational Therapist Assistant)';
        case 'new yorkcota':
            return qual + 'Occupational Therapist Assistant License';
        case 'north carolinacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'north dakotacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'ohiocota':
            return qual + 'Occupational Therapist Assistant License and \n Pupil Service License or ODE Registration';
        case 'oklahomacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'oregoncota':
            return qual + 'Occupational Therapist Assistant License';
        case 'pennslyvaniacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'rhode islandcota':
            return qual + 'Occupational Therapist Assistant License';
        case 'south carolinacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'south dakotacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'tennesseecota':
            return qual + 'Occupational Therapist Assistant License';
        case 'texascota':
            return qual + 'Occupational Therapist Assistant License';
        case 'utahcota':
            return qual + 'Occupational Therapist Assistant License';
        case 'vermontcota':
            return qual + 'Occupational Therapist Assistant License';
        case 'virginiacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'washingtoncota':
            return qual + 'Occupational Therapist Assistant License';
        case 'west virginiacota':
            return qual + 'Occupational Therapist Assistant License';
        case 'wisconsincota':
            return qual + 'Occupational Therapist Assistant License and \nSchool Occupational Therapist Assistant Certificate (DPI)';
        case 'wyomingcota':
            return qual + 'Occupational Therapist Assistant License';

    // Art Therapist 
        case 'illinoisart therapist':
            return qual + 'Preferred:  -National Certification: Registed Art Therapist (ATR) Required: \nIDFPR Licensed Professional Counselor (LPC) or  Licensed Clinical Professional Counselor (LCPC)';
        case 'louisianaart therapsit':
            return qual + 'Ancillary Certificate with Art Therapist Add-On';
        case 'new mexicoart therapist':
            return qual + 'PED Instructional Support Provider Certificate';
            
    // Dance Therapist 
        case 'louisianadance therapsit':
            return qual + 'Ancillary Certificate with Dance Therapist Add-On';
        case 'new mexicodance therapist':
            return qual + 'PED Instructional Support Provider Certificate';

            
   //Music Therapist 
        case 'alabamamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'alaskamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'arizonamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'arkansasmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'californiamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'coloradomusic therapist':
             return qual + 'National Board Certification as Music Therapist';
        case 'connecticutmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'delawaremusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'dcmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'floridamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'georgiamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'hawaiimusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'idahomusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'illinoismusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'indianamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'iowamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'kansasmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'kentuckymusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'louisianamusic therapist':
            return qual + 'National Board Certification as Music Therapist and Ancillary Credential with Music Therapist Add-On';
        case 'mainemusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'marylandmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'massachusettsmucic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'michiganmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'minnesotamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'mississippimusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'missourimusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'montanamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'nebraskamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'nevadamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'new hampshiremusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'new jerseymusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'new mexicomusic therapist':
            return qual + 'National Board Certification as Music Therapist and PED Licensure for Instructional Support Provider';
        case 'new yorkmusic theraist':
            return qual + 'National Board Certification as Music Therapist';
        case 'north carolinamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'north dakotamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'ohiomusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'oklahomamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'oregonmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'pennslyvaniamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'rhode islandmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'south carolinamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'south dakotamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'tennesseemusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'texasmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'utahmusic therpaist':
            return qual + 'National Board Certification as Music Therapist';
        case 'vermontmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'virginiamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'washingtonmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'west virgniamusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'wisconsinmusic therapist':
            return qual + 'National Board Certification as Music Therapist';
        case 'wyomingmusic therapist':
           return qual + 'National Board Certification as Music Therapist';

    //Occupational Therapist 
        case 'alabamaot':
            return qual + 'Occupational Therapist License';
        case 'alaskaot':
            return qual + 'Occupational Therapist License and Special Services Certificate (Type C) - Occupational Therapist Endorsement';
        case 'arizonaot':
            return qual +  'Occupational Therapist License';
        case 'arkansasot':
            return qual + 'Occupational Therapist License';
        case 'californiaot':
            return qual + 'Occupational Therapist License';
        case 'coloradoot':
            return qual + 'Occupational Therapist License and Special Services Provider - Occupational Therapist Endorsement';
        case 'connecticutot':
            return qual +  'Occupational Therapist License';
        case 'delawareot':
            return  qual + 'Occupational Therapist License';
        case 'dcot':
            return qual +  'Occupational Therapist License';
        case 'floridaot':
            return qual +  'Occupational Therapist License';
        case 'georgiat':
            return qual +  'Occupational Therapist License';
        case 'hawaiiot':
            return qual + 'Occupational Therapist License';
        case 'idahoot':
            return qual + 'Occupational Therapist License and Pupil Service Certificate with Occupational Therapist Endorsement';
        case 'illinoisot':
            return qual + 'Occupational Therapist License';
        case 'indianaot':
            return qual + 'Occupational Therapist License';
        case 'iowaot':
            return qual + 'Occuational Therapist License and Statement of Professional Recognition to Board of Educational Examiners';
        case 'kansasot':
            return qual + 'Occupational Therapist License';
        case 'kentuckyot':
            return qual + 'Occupational Therapist License';
        case 'louisianaot':
            return qual + 'Occupational Therapist License and Ancillary Occupational Therapist Credential';
        case 'maineot':
            return qual + 'Occupational Therapist License';
        case 'marylandot':
            return qual + 'Occupational Therapist License';
        case 'massachusettsot':
            return qual + 'Occupational Therapist License';
        case 'michiganot':
            return qual + 'Occupational Therapist License';
        case 'minnesotaot':
            return qual + 'Occupational Therapist License';
        case 'mississippiot':
            return qual + 'Occupational Therapist License';
        case 'missouriot':
            return qual + 'Occupational Therapist License';
        case 'montanaot':
            return qual + 'Occupational Therapist License';
        case 'nebraskaot':
            return qual + 'Occupational Therapist License';
        case 'nevadaot':
            return qual + 'Occupational Therapist License';
        case 'new hampshireot':
            return qual + 'Occupational Therapist License';
        case 'new jerseyot':
            return qual + 'Occupational Therapist License and Educational Services Certificate with School Occupational Therapist Endorsement';
        case 'new mexicoot':
            return qual + 'Occupational Therapist License and PED Licensure for Instructional Support Provider';
        case 'new yorkot':
            return qual + 'Occupational Therapist License';
        case 'north carolinaot':
            return qual + 'Occupational Therapist License';
        case 'north dakotaot':
            return qual + 'Occupational Therapist License';
        case 'ohioot':
            return qual + 'Occuational Therapist License and Pupil Service License or ODE Registration';
        case 'oklahomaot':
            return qual + 'Occupational Therapist License';
        case 'oregonot':
            return qual + 'Occupational Therapist License';
        case 'pennslyvaniaot':
            return qual + 'Occupational Therapist License';
        case 'rhode islandot':
            return qual + 'Occupational Therapist License';
        case 'south carolinaot':
            return qual + 'Occupational Therapist License';
        case 'south dakotaot':
            return qual + 'Occupational Therapist License';
        case 'tennesseeot':
            return qual + 'Occupational Therapist License';
        case 'texasot':
            return qual + 'Occupational Therapist License';
        case 'utahot':
            return qual + 'Occupational Therapist License';
        case 'vermontot':
            return qual + 'Occupational Therapist License';
        case 'virginiaot':
            return qual + 'Occupational Therapist License';
        case 'washingtonot':
                return qual + 'Occupational Therapist License and Educational Staff Associate (ESA) Credential with School Occupational Therapist Endorsement';
        case 'west virginiaot':
            return qual + 'Occupational Therapist License';
        case 'wisconsinot':
            return qual + 'Occupational Therapist License and School Occupational Therapist Credential';
        case 'wyomingot':
            return qual + 'Occupational Therapist License';
            
// Orientation & Mobility Specialsit 
        case 'alabamaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'alaskaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and Special Servcies Credential (Type C) with Orentiation & Mobility Endorsement';
        case 'arizonaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'arkansasoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'californiaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'coloradooms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and Special Services License with School Orientation & Mobility Endorsement';
        case 'connecticutoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'delawareoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'dcoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'floridaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'georgiaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'hawaiioms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and Special Education - Orientation & Mobility Certificate';
        case 'idahooms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'illinoisoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'indianaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'iowaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and Limited Teaching License wih Orientation & Mobility Authorization';
        case 'kansasoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'kentuckyoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and Professional Certificate for Orientation & Mobility Specialist';
        case 'louisianaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and Ancillary School Services Certificate';
        case 'maineoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'marylandoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'massachusettsoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'michiganoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'minnesotaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'mississippioms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'missourioms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'montanaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'nebraskaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and Special Servcies Certificate';
        case 'nevadaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'new hampshireoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'new jerseyoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and Educational Services Certificate with School Orientation & Mobility Specialist Endorsement';
        case 'new mexicooms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and PED Licensure for Instructional Support Provider (Mobility Trainer for the Blind)';
        case 'new yorkoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'north carolinaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'north dakotaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'ohiooms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and Pupil Service License with Orientation & Mobility Endorsement';
        case 'oklahomaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'oregonoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'pennslyvaniaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'rhode islandoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'south carolinaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'south dakotaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'tennesseeoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'texasoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'utahoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'vermontoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'virginiaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'washingtonoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and Educational Staff Associate (ESA) with School Orientation & Mobility Specialist Endorsement';
        case 'west virginiaoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';
        case 'wisconsinoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential and DPI Credential for Orientation & Mobility';
        case 'wyomingoms':
            return qual + 'National Certification with AVCREP or other nationally recognized credential';

    //Physical Therapist 
        case 'alabamapt':
            return qual + 'Physical Therapist License';
        case 'alaskapt':
            return qual + 'Physical Therapist License and Special Services Certificate (Type C) with Physical Therapy Endorsement';
        case 'arizonapt':
            return qual + 'Physical Therapist License';
        case 'arkansaspt':
             return qual + 'Physical Therapist License';
        case 'californiapt':
             return qual + 'Physical Therapist License';
        case 'coloradopt':
            return qual + 'Physical Therapist License and Special Service Provider License with School Psychical Therapist Endorsement';
        case 'connecticutpt':
             return qual + 'Physical Therapist License';
        case 'delawarept':
             return qual + 'Physical Therapist License';
        case 'dcpt':
             return qual + 'Physical Therapist License';
        case 'floridapt':
             return qual + 'Physical Therapist License';
        case 'georgiapt':
             return qual + 'Physical Therapist License';
        case 'hawaiipt':
             return qual + 'Physical Therapist License';
        case 'idahopt':
             return qual + 'Physical Therapist License';
        case 'illinoispt':
             return qual + 'Physical Therapist License';
        case 'indianapt':
             return qual + 'Physical Therapist License';
        case 'iowapt':
             return qual + 'Physical Therapist License with Statement of Professional Recognition to Board of Educational Examiners';
        case 'kansaspt':
             return qual + 'Physical Therapist License';
        case 'kentickypt':
             return qual + 'Physical Therapist License';
        case 'louisianapt':
             return qual + 'Physical Therapist License and Ancillary Physical Therapist Credential';
        case 'mainept':
             return qual + 'Physical Therapist License';
        case 'marylandpt':
             return qual + 'Physical Therapist License';
        case 'massachusettspt':
             return qual + 'Physical Therapist License';
        case 'michiganpt':
             return qual + 'Physical Therapist License';
        case 'minnesotapt':
             return qual + 'Physical Therapist License';
        case 'mississippipt':
             return qual + 'Physical Therapist License';
        case 'missouript':
             return qual + 'Physical Therapist License';
        case 'montanapt':
             return qual + 'Physical Therapist License';
        case 'nebraskapt':
             return qual + 'Physical Therapist License';
        case 'nevadapt':
             return qual + 'Physical Therapist License';
        case 'new hampshirept':
             return qual + 'Physical Therapist License';
        case 'new jerseypt':
             return qual + 'Physical Therapist License';
        case 'new mexicopt':
             return qual + 'Physical Therapist License with PED Instructional Support Provider (Physical Therapist)';
        case 'new yorkpt':
             return qual + 'Physical Therapist License';
        case 'north carolinapt':
             return qual + 'Physical Therapist License';
        case 'north dakotapt':
             return qual + 'Physical Therapist License';
        case 'ohiopt':
            return qual + 'Physical Therapist License and Pupil Service License or ODE Registration';
        case 'oklahomapt':
             return qual + 'Physical Therapist License';
        case 'oregonpt':
             return qual + 'Physical Therapist License';
        case 'pennslyvaniapt':
             return qual + 'Physical Therapist License';
        case 'rhode islandpt':
             return qual + 'Physical Therapist License';
        case 'south carolinapt':
             return qual + 'Physical Therapist License';
        case 'south dakotapt':
             return qual + 'Physical Therapist License';
        case 'tennesseept':
             return qual + 'Physical Therapist License';
        case 'texaspt':
             return qual + 'Physical Therapist License';
        case 'utahpt':
             return qual + 'Physical Therapist License';
        case 'vermontpt':
             return qual + 'Physical Therapist License';
        case 'virginiapt':
             return qual + 'Physical Therapist License';
        case 'washingtonpt':
             return qual + 'Physical Therapist License and Educational Staff Associate (ESA) with School Therapist Therapist Endorsement';
        case 'west virginiapt':
             return qual + 'Physical Therapist License';
        case 'wisconsinpt':
             return qual + 'Physical Therapist License and DPI School Physical Therapist Certificate';
        case 'wyomingpt':
             return qual + 'Physical Therapist License';

    //Physical Therapist Assistant 
        case 'alabamapta':
            return qual + 'Physical Therapist Assistant License';
        case 'alaskapta':
            return qual + 'Physical Therapist Assistant License';
        case 'arizonapta':
            return qual + 'Physical Therapist Assistant License';
        case 'arkansaspta':
             return qual + 'Physical Therapist Assistant License';
        case 'californiapta':
             return qual + 'Physical Therapist Assistant License';
        case 'coloradopta':
            return qual + 'Physical Therapist Assistant License and Special Service Provider License with School Psychical Therapist Endorsement';
        case 'connecticutpta':
             return qual + 'Physical Therapist Assistant License';
        case 'delawarepta':
             return qual + 'Physical Therapist Assistant License';
        case 'dcpta':
             return qual + 'Physical Therapist Assistant License';
        case 'floridapta':
             return qual + 'Physical Therapist Assistant License';
        case 'georgiapta':
             return qual + 'Physical Therapist Assistant License';
        case 'hawaiipta':
             return qual + 'Physical Therapist Assistant License';
        case 'idahopta':
             return qual + 'Physical Therapist Assistant License';
        case 'illinoispta':
             return qual + 'Physical Therapist Assistant License';
        case 'indianapta':
             return qual + 'Physical Therapist Assistant License';
        case 'iowapta':
             return qual + 'Physical Therapist Assistant License';
        case 'kansaspta':
             return qual + 'Physical Therapist Assistant License';
        case 'kentickypta':
             return qual + 'Physical Therapist Assistant License';
        case 'louisianapta':
             return qual + 'Physical Therapist Assistant License and Ancillary Physical Therapist Assistant Credential';
        case 'mainepta':
             return qual + 'Physical Therapist Assistant License';
        case 'marylandpta':
             return qual + 'Physical Therapist Assistant License';
        case 'massachusettspta':
             return qual + 'Physical Therapist Assistant License';
        case 'michiganpta':
             return qual + 'Physical Therapist Assistant License';
        case 'minnesotapta':
             return qual + 'Physical Therapist Assistant License';
        case 'mississippipta':
             return qual + 'Physical Therapist Assistant License';
        case 'missouripta':
             return qual + 'Physical Therapist Assistant License';
        case 'montanapta':
             return qual + 'Physical Therapist Assistant License';
        case 'nebraskapta':
             return qual + 'Physical Therapist Assistant License';
        case 'nevadapta':
             return qual + 'Physical Therapist Assistant License';
        case 'new hampshirepta':
             return qual + 'Physical Therapist Assistant License';
        case 'new jerseypta':
             return qual + 'Physical Therapist Assistant License';
        case 'new mexicopta':
             return qual + 'Physical Therapist Assistant License and PED Licensure for Instructional Support Provider (Physical Therapist Assistant)';
        case 'new yorkpta':
             return qual + 'Physical Therapist Assistant License';
        case 'north carolinapta':
             return qual + 'Physical Therapist Assistant License';
        case 'north dakotapta':
             return qual + 'Physical Therapist Assistant License';
        case 'ohiopta':
            return qual + 'Physical Therapist Assistant License and Pupil Service License or ODE Registration';
        case 'oklahomapta':
            return qual + 'Physical Therapist Assistant License';
        case 'oregonpta':
             return qual + 'Physical Therapist Assistant License';
        case 'pennslyvaniapta':
             return qual + 'Physical Therapist Assistant License';
        case 'rhode islandpta':
             return qual + 'Physical Therapist Assistant License';
        case 'south carolinapta':
             return qual + 'Physical Therapist Assistant License';
        case 'south dakotapta':
             return qual + 'Physical Therapist Assistant License';
        case 'tennesseepta':
             return qual + 'Physical Therapist Assistant License';
        case 'texaspta':
             return qual + 'Physical Therapist Assistant License';
        case 'utahpta':
             return qual + 'Physical Therapist Assistant License';
        case 'vermontpta':
             return qual + 'Physical Therapist Assistant License';
        case 'virginiapta':
             return qual + 'Physical Therapist Assistant License';
        case 'washingtonpta':
             return qual + 'Physical Therapist Assistant License';
        case 'west virginiapta':
             return qual + 'Physical Therapist Assistant License';
        case 'wisconsinpta':
             return qual + 'Physical Therapist Assistant License and DPI School Physical Therapist Assistant Certificate';
        case 'wyomingpta':
             return qual + 'Physical Assistant Therapist License';
        
// Reccreational Therapist

        case 'alabamarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'alaskarec therapsit':
            return qual + 'National Recreational Therapy Certification';
        case 'arizonarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'arkansasrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'californiarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'coloradorec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'connecticutrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'delawarerec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'dcrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'floridarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'georgiarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'hawaiirec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'idahorec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'illinoisrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'indianarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'iowarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'kansasrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'kentuckyrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'louisianarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'mainerec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'marylandrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'massachusettsrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'michiganrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'minnesotarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'mississippirec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'missourirec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'montanarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'nebraskarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'nevadarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'new hampshirerec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'new jerseyrectherapist':
            return qual + 'National Recreational Therapy Certification';
        case 'new mexicorec therapist':
            return qual + 'National Recreational Therapy Certification and PED Licensure for Instructional Support Provider (Recreational Therapist)';
        case 'new yorkrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'north carolinarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'north dakotarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'ohiorec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'oklahomarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'oregonrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'pennslyvaniarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'rhode islandrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'south carolinarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'south dakotarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'tennesseerec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'texasrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'utahrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'vermontrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'virginiarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'washingtonrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'west virginiarec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'wisconsinrec therapist':
            return qual + 'National Recreational Therapy Certification';
        case 'wyomingrec therapist':
            return qual + 'National Recreational Therapy Certification';

// SLPA or Speech Support Personnel 
        case 'alabamaslpa':
            return qual + 'Dept of Education: Level I or Level II Speech-Language Pathology Assistant Credential';
        case 'alaskaslpa':
            return qual + 'Speech Language Pathologist Assistant License';
        case 'arizonaslpa':
            return qual + 'Speech Language Pathologit Assistant License';
        case 'arkansasslpa':
            return qual + 'Must be registered or able to register with Speech Board and Department of Education';
        case 'californiaslpa':
            return qual + 'Speech-Language Pathologist Assistant License';
        case 'coloradoslpa':
            return qual + 'Colorado Dept. of Education School Speech Language Pathologist Assistant';
        case 'connecticutslpa':
            return qual + 'Bachelors Degree in Communication Science Disorders or similar field';
        case 'dcslpa':
            return qual + 'Speech-Language Pathologist Assistant License';
        case 'floridaslpa':
            return qual + 'Speech Language Pathologist Assistant License';
        case 'georgiaslpa':
            return 'Note: they are Speech-Language Pathology Aide.'+ qual + 'Registered with State Board of Examiners of Speech-Language Pathology/Audiology';
      //insert variable for HI para requirements here.... 
        case 'hawaiislpa':
            return 'Note: HI uses Commmunication Aides. Communication Aides must meet paraprofessional requirements.\n Para Reqs'; 
        case 'idahoslpa':
            return qual + 'SLP Assistant License or SLP Aide License';
        case 'illinoisslpa':
            return qual + 'Speech Language Pathology Assistant License';
        case 'indianaslpa':
            return qual + 'Speech Language Pathologist Assistant License';
        case 'iowaslpa':
            return 'IA has 2 types (both are not licensed):\n SLP Assistant I: Works with an individual for whom significant improvement is expected within a reasonable amount of time; must be 18 and have a high school diploma or equivalent, completion of a three semester-hour course in introductory speech and language pathology for speech pathology assistants, and 15 hours of instruction in the specific tasks that the assistant will be performing or a training period of 75 clock hours on instruction and practicum experience. Supervision must include direct on-site observation for a minimum of 20 percent of the assistants direct patient care.\nSLP Assistant II: Works with an individual for whom maintenance of present level of communication is the goal, or for whom, based on the history and diagnosis, only slow improvement is expected; must be 18 and have a high school diploma or equivalent, completion of a three semester-hour course in introductory speech and language pathology for speech pathology assistants, and 15 hours of instruction in the specific tasks that the assistant will be performing or a training period of 75 clock hours on instruction and practicum experience. There must be 10 percent direct on-site supervision';
        case 'kansasslpa':
            return 'Must have High School Diploma and completed a training program by ASHA Certified SLP, and receive on-going supervised training by a KS licensed SLP for 1 hour per month, and meet other supervision requirements specified in regulations';
        case 'kentuckyslpa':
            return qual + 'Speech Pathologist Assistant License and Professional Certificate - Exceptional Children/Communication Disorders/SLPA';
        case 'louisianaslpa':
            return qual + 'Ancillary Speech Pathology Assistant Certificate';
        case 'maineslpa':
            return 'Note: Can be also Educational Technician Level I,II or III OR SLPA. If hiring Educational Technician, no SLPA license is required. See Para for more info.' + qual + 'Speech Language Pathologist Assistant License';
        case 'marylandslpa':
            return qual + 'Speech-Language Pathologist Assistant License';
        case 'massachusettsslpa':
            return qual + 'Speech-Language Pathologist Assistant License';
        case 'michiganslpa':
            return 'MI does not recognize SLPAs, nor do they regulate Speech Support Personnel.';
        case 'minnisotaslpa':
            return 'MN recognizes SLPAs, but stringent supervision requirements in MRS §148.5192. Email: brendan.schuman@soliant.com to review.';
        case 'mississippislpa':
            return qual + 'Speech Associate Educator License';
        case 'missourislpa':
            return 'Offers SLP Aide and SLP Assistant - both must be registerd with speech board (not licnesed). \n SLP Aide: has less than a Bachelors Degree in related field \n SLP Assistant: Has Bachelors in related field.';
        case 'montanaslpa':
            return 'As of 10/1/21 - MT began immplementing licenses for SLPAs. However licensure process has been delayed due to implementation issues. Email legal@soliant.com for support.'; 
        case 'nebraskaslpa':
            return 'Note: SLPAs are called Speech Language Technicians.' +qual + 'Special Services Certificate with Speech-Language Technician Endorsement';
        case 'nevadaslpa':
            return 'NV does not recognize SLPAs';
        case 'new hampshireslpa':
            return 'State Licensure is available for SLPA, but not required to work in school setting (See SPE 601.01). Soliant policy is to have licensure unless waived by Legal Department'+ qual + 'Speech Language Pathologist Assistant License';
        case 'new jerseyslpa':
            return 'NJ does not recognize SLPAs';
        case 'new mexicoslpa':
            return 'NM does not recognize SLPAs, but instead offers Apprentice in Speech Language (ASL). \n Requirements for this include:\n (1) Bachelors Degree in Speech/Communucation Sciences \n (2) Completing a Graduate class at least 9 semester hours per hour and being enrolled in a Masters Degree program. IF not accepted into a masters program, differnt coursework rate applies. \n (3) Must be supervised by SLP with a capped caseload of 40'; 
        case 'new yorkslpa':
            return 'NY does not recognize SLPAs';
        case 'north carolinaslpa':
            return 'SLP Assistants are not licensed, but instead registered with the Speech Board.';
        case 'north dakotaslpa':
            return 'Note: ND also recognizes SLP Paraprofessionals (SLPP). SLPPs are NOT licensed by the Speech Board.' + qual + 'Speech Language Pathologist License or Certificate of Completion for Speech-Language Pathology issed by DPI \n SLPPs: Must have Certificate of Completion issued to them by DPI';
        case 'ohioslpa':
            return qual + 'Speech-Language Pathology Aide License';
        case 'oklahomaslpa':
            return qual + 'Speech-Language Pathology Assistant License and Paraprofessional Certificate';
        case 'oregonslpa':
            return qual + 'Speech-Language Pathologist Assistant License';
        case 'pennslyvaniaslpa':
            return 'Note: PA does not grant licenses to SLPAs. Instead, SLPAs must register with the PA Speech & Hearing Board and have a superviosr and supervision plan.';
        case 'rhode islandslpa':
            return 'SLPAs must hold a Bachelors Degree & be registered every 2-years with the Board.' + qual + 'Bachelors Degree in Communication Science Disorders or Speech-Pathology';
        case 'south carolinaslpa':
            return qual + 'Speech Language Pathologist Assistant License';
        case 'south dakotaslpa':
            return qual + 'Speech-Language Pathologist Assistant License';
        case 'tennesseeslpa':
            return qual + 'Speech-Language Pathologist Assitant License';
        case 'texasslpa':
            return qual + 'Speech Language Pathologist Assistant';
        case 'utahslpa':
            return 'Note: No state license required; but does require educator credential.' + qual + 'Teaching License with Speech-Language Technician Concentration.';
        case 'vermontslpa':
            return 'VT does not recognize SLPAs or speech support personnel.';
        case 'virginiaslpa':
            return 'Note: VA does not license SLPAs. However, SLPs are required to document supervision of SLP Assistants and file a plan with the Speech Board.' + qual + 'Associates or Bachelors with Documented Training by a licensed SLP in topics related to the population being serviced; or employment as an SLPA in a US jurisdiction within the last 5 years before 07/27/2016';
        case 'washingtonslpa':
            return qual + 'Speech Language Pathologist Assitant License';
        case 'west virginiaslpa':
            return qual + 'Speech-Language Pathologist Assistant License';
        case 'wisconsinslpa':
            return 'Note: WI SLPAs must have Special Program Aide license' + qual + 'Special Program Aide Credential from DPI';
        case 'wyomingslpa':
            return 'Note: Can hire SLP Aides which have a high school diploma.' + qual + 'Speech-Language Pathologist Assistant License';

    //Speech Language Pathologist (SLP) *******ADD SLP COMPACT STATE Y/N***********

        case 'alabamaslp':
            return 'State License: Speech-Language Pathologist\n' + 'Educator Credential: Professional Educator Certificate\n' + 'Note: Emergency/Temporary Cert can be granted';
        case 'alaskaslpa':
            return 'State Licensure: Speech-Language Pathologist \n Educator Credential: Special Services (Type C) with Speech, Language or Hearing Endorsement';
        case 'arizonaslp':
            return 'State Licensure: Speech-Language Pathologist \n Educator Credential: Standard Speech-Language Pathologist (K-12) Certificate';
        case 'arkansasslp':
            return 'State Licensure: Speech Language Pathologist\n' +' Educator Credential: Ancillary License - Speech Language Pathology (K-12)';
        case 'californiaslp':
            return 'State Licensure: Speech Language Pathologist (from DCA) \n' +'Educator Credential: Clear/Professional Speech Services Credential from CTC\n'+'\nNote: Services MAY be provided by SLP license holder or CTC Certified SLP (5 CCR §3051.1)';
        case 'coloradoslp':
            return 'State Licensure: Speech Language Pathologist (from DORA)\n'+ 'Educator Credential: Special Services Provider with Speech-Language Pathologist Endorsement\n' + 'Note: Can work if they only have CDE credential and not DORA';
        case 'connecticutslp':
            return 'State Licensure: Speech Language Pathologist\n' + 'Educator License is available, but not required for contractors. See: RCSA §10-145d-543 & RCSA §10-145d-400(ee)';
        case 'delawareslp':
            return 'State Licensure: Speech Language Pathologist'; 
        case 'dcslp':
            return 'State Licensure: Speech Language Pathologist (DC Health Dept) \n' +' Educator Credential: School Service Provider Certification w/ School Speech Pathologist Endorsement';
        case 'floridaslp':
            return 'State Licensure: Speech Language Pathologist \n' +' Educator Credential: Speech-Language Impaired (Grades K-12) - Academic Class\n'+ ' No Educator credential needed IF SLP is only providing services, and not teaching \n' +' See: 6A-6.03012 FAS';
        case 'georgiaslp':
            return 'State Licensure: Speech Language Pathologist \n' +' Educator Credential: Professional Certificate from GaPSC';
        case 'hawaiislp':
            return 'State Licensure: Speech Language Pathologist';
        case 'idahoslp':
            return 'State Licensure: Speech Language Pathologist\n'+ 'Educator Credential: Pupil Personnel Services Certificate w/ Speech-Language Pathologist Endorsement';
        case 'illinoisslp':
            return 'State Licensure: Speech Language Pathologist\n'+ ' Educator Credential: Professional Educator License (issued by ISBE)';
        case 'indianaslp':
            return 'State Licensure: Speech Language Pathologist\n' +' Educator Credential: Professional Educator License - Communication Disorders (P-12)\n'+ 'Emergency Cert. available';
        case 'iowaslp':
            return 'State Licensure: Speech Language Pathologist\n' +'Educator Credential: Professional Service License OR Statement of Professional Recognition (SPR) from Board of Educational Examiners';
        case 'kansasslp':
            return 'State Licensure: Speech Language Pathologist';
        case 'kentuckyslp':
            return 'State Licensure: Speech Language Pathologist\n' +'Note: 1/2/24 - KY no longer issues SLP Educator credential';
        case 'louisianaslp':
            return 'State Licensure: Speech Language Pathologist \n Educator Credential: Ancillary Qualified Certificate OR Ancillary Speech Therapist';
        case 'maineslp':
            return 'Note: Educator Cert not required if clinican holds valid SLP license.\n' +' State Licensure: Speech Language Pathologist\n' + ' Educator Credential: Professional Speech & Hearing Clinican Certificate (K-12)\n'+ 'Conditional Cert. avaialble';
        case 'marylandslp':
            return 'State Licensure: Speech Language Pathologist';
        case 'massachusettsslp':
            return 'State Licensure: Speech Language Pathologist \n'+ ' Eucator Credential: Specialist Teacher - Speech,Language & Hearing Disorders \n Note: SLPs can work w/ educator license pending';
        case 'michiganslp':
            return 'State Licensure: Speech Language Pathologist (issued by LARA)';
        case 'minnesotaslp':
            return 'State Licensure: Speech Language Pathologist \n' + 'Educator Crednetial: Professional License (Level 2,3 or 4)';
        case 'mississippislp':
            return 'State Licensure: Speech Language Pathologist \n'+' Educator Credential: License Class AA, AAA or AAAA in Speech/Language Clinician \n Emergency Cert available';
        case 'missourislp':
            return 'State Licensure: Speech Language Pathologist \n'+' Note: Previously an educator license was required but no longer required';
        case 'montanaslp':
            return 'State Licensure: Speech Language Pathologist';
        case 'nebraskaslp':
            return 'State Licensure: Speech Language Pathologist \n' + 'Educator Credential: Special Services Certificate with Speech-Language Pathologist Endorsement \n' + ' Temporary/Conditional certs exist';
        case 'nevadaslp':
            return 'State Licensure: Speech Language Pathologist \n' + ' Educator Credential: Standard Teaching License w/ Speech & Language Impairments';
        case 'new hampshireslp':
            return 'State Licensure: Speech Language Pathologist \n' + ' Educator Credential: NO LONGER REQUIRED \n' + 'Compact: SLP Specialist Educators can work in schools only & are not eligible for SLP compact license';
        case 'new jerseyslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Educator Credential: Speech-Language Specialist Standard Certificate OR Speech-Language Specialist Certificate of Eligiblity\n' + ' No emergency cert available';
        case 'new mexicoslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Educator Credential: Speech Language Pathologist P-12 License';
        case 'new yorkslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Educator Credential: Teacher of Students with Speech-Language Disabilities (TSSLD)';
        case 'north carolinaslp':
            return 'State Licensure: Speech Language Pathologist \n'+'Educator Credential: Speical Service Personnel - School Speech Language Pathologist Credential'; //might not need ed cert?
        case 'north dakotaslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Note: Educator Certification is available, but not required';
        case 'ohioslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Educator Credential: Professional Pupil Service License\n'+' Emergency Cert available';
        case 'oklahomaslp':
            return 'State Licensure: Speech Language Pathologist\n'+' Educator Credential: Teacher Certification Speech-Language Pathologist';
        case 'oregonslp':
            return 'State Licensure: Speech Language Pathologist';
        case 'pennslyvaniaslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Educator Credential: Teacher Certificate Special Education Speech-Language Pathologist Impaired OR\n '+' Speech-Language Pathologist Educational Certificate PK-12';
        case 'rhode islandslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Educator Credential: Speech & Language Pathologist Certificate PK-12';
        case 'south carolinaslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Educator Credential: Educator Speech-Language Therapist Certificate';
        case 'south dakotaslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Note: If candidate has limited SLP license, they can work in schools only';
        case 'tennesseeslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Educator Credential: School Services Personnel License Speech Language Pathologist';
        case 'texasslp':
            return 'State Licensure: Speech Language Pathologist';
        case 'utahslp':
            return 'State Licensure: Speech Language Pathologist \n'+' Educator Crednetial: LEA/Associate/Professional Teaching License w/ Speech Pathologist Concentraiton';
        case 'vermontslp':
            return 'State Licensure: Speech Language Pathologist\n'+' Educator Credential: Teaching Credential w/ Eduational Speech-Language Pathologist Endorsement';
        case 'virginiaslp':
            return 'State Licensure: Speech Language Pathologist';
        case 'washingtonslp':
            return 'State Licensure: Speech Language Pathologist\n'+' Educator Credential: Eductional Staff Associate (ESA) - School Speech-Language Pathologist';
        case 'west virginiaslp':
            return 'State Licensure: Speech Language Pathologist\n'+' Educator Credential: Student Support Certificate';
        case 'wisconsinslp':
            return 'State Licensure: Speech Language Pathologist\n'+' Educator Credential: Speech-Language Pathology PK-12 (DPI)';
        case 'wyomingslp':
            return 'State Licensure: Speech Language Pathologist\n'+' Note: SLP Educator Certs are null & void as of 7/1/2020';
            
    //Braillist 
        case 'north carolinabrallist':
            return 'Should have experience or certification in transliteration or Brialle\n'+' Note: Each interpreter or transliterator employed by a local educational agency to provide services to hearing-impaired students must annually complete 15 hours of job-related training that has been approved by the local educational agency See: N.C.G.S. 115C-110.2'; 
        case 'new mexicobraillist':
            return 'Educator Credential: Support Provider License - Educational Assistant Endorsement)';


    // ESL Teacher coded as value teacher - esl
        case 'alabamateacher - esl':
            return 'Appropriate teaching credential'; 
        case 'alaskateacher - esl':
            return 'Appropriate teaching credential';
        case 'arizonateacher - esl':
            return 'Appropriate teaching credential';
        case 'arkansasteacher - esl':
            return 'Appropriate teaching credential';
        case 'californiateacher - esl':
            return 'Appropriate teaching credential';
        case 'coloradoteacher - esl':
            return 'Appropriate teaching credential';
        case 'connecticutteacher - esl':
            return 'Appropriate teaching credential';
        case 'delawareteacher - esl':
            return 'Appropriate teaching credential';
        case 'dcteacher - esl':
            return 'Appropriate teaching credential';
        case 'floridateacher - esl':
            return 'Appropriate teaching credential';
        case 'georgiateacher - esl':
            return 'Appropriate teaching credential';
        case 'hawaiiteacher - esl':
            return 'Appropriate teaching credential';
        case 'idahoteacher - esl':
            return 'Appropriate teaching credential';
        case 'illinoisteacher - esl':
            return 'Appropriate teaching credential';
        case 'indianateacher - esl':
            return 'Appropriate teaching credential';
        case 'iowateacher - esl':
            return 'Appropriate teaching credential';
        case 'kansasteacher - esl':
            return 'Appropriate teaching credential';
        case 'kentuckyteacher - esl':
            return 'Appropriate teaching credential';
        case 'louisianateacher - esl':
            return 'Appropriate teaching credential';
        case 'maineteacher - esl':
            return 'Appropriate teaching credential';
        case 'marylandteacher - esl':
            return 'Appropriate teaching credential';
        case 'massachusettsteacher - esl':
            return 'Appropriate teaching credential';
        case 'michiganteacher - esl':
            return 'Appropriate teaching credential';
        case 'minnesotateacher - esl':
            return 'Appropriate teaching credential';
        case 'mississippiteacher - esl':
            return 'Appropriate teaching credential';
        case 'missouriteacher - esl':
            return 'Appropriate teaching credential';
        case 'montanateacher - esl':
            return 'Appropriate teaching credential';
        case 'nebraskateacher - esl':
            return 'Appropriate teaching credential';
        case 'nevadateacher - esl':
            return 'Appropriate teaching credential';
        case 'new hampshireteacher - esl':
            return 'Appropriate teaching credential';
        case 'new jerseyteacher - esl':
            return 'Appropriate teaching credential';
        case 'new mexicoteacher - esl':
            return 'Appropriate teaching credential';
        case 'new yorkteacher - esl':
            return 'Appropriate teaching credential';
        case 'north carolinateacher - esl':
            return 'Appropriate teaching credential';
        case 'north dakotateacher - esl':
            return 'Appropriate teaching credential';
        case 'ohioteacher - esl':
            return 'Appropriate teaching credential';
        case 'oklahomateacher - esl':
            return 'Appropriate teaching credential';
        case 'oregonteacher - esl':
            return 'Appropriate teaching credential';
        case 'pennslyvaniateacher - esl':
            return 'Appropriate teaching credential';
        case 'rhode islandteacher - esl':
            return 'Appropriate teaching credential';
        case 'south carolinateacher - esl':
            return 'Appropriate teaching credential';
        case 'south dakotateacher - esl':
            return 'Appropriate teaching credential';
        case 'tennesseeteacher - esl':
            return 'Appropriate teaching credential';
        case 'texasteacher - esl':
            return 'Appropriate teaching credential';
        case 'utahteacher - esl':
            return 'Appropriate teaching credential';
        case 'vermontteacher - esl':
            return 'Appropriate teaching credential';
        case 'virginiateacher - esl':
            return 'Appropriate teaching credential';
        case 'washingtonteacher - esl':
            return 'Appropriate teaching credential';
        case 'west virginiateacher - esl':
            return 'Appropriate teaching credential';
        case 'wisconsinteacher - esl':
            return 'Appropriate teaching credential';
        case 'wyomingteacher - esl':
            return 'Appropriate teaching credential';
            
            
    // Gifted Teacher coded as teacher - gifted
        case 'alabamateacher - gifted':
            return 'Appropriate teaching credential'; 
        case 'alaskateacher - gifted':
            return 'Appropriate teaching credential';
        case 'arizonateacher - gifted':
            return 'Appropriate teaching credential';
        case 'arkansasteacher - gifted':
            return 'Appropriate teaching credential';
        case 'californiateacher - gifted':
            return 'Appropriate teaching credential';
        case 'coloradoteacher - gifted':
            return 'Appropriate teaching credential';
        case 'connecticutteacher - gifted':
            return 'Appropriate teaching credential';
        case 'delawareteacher - gifted':
            return 'Appropriate teaching credential';
        case 'dcteacher - gifted':
            return 'Appropriate teaching credential';
        case 'floridateacher - gifted':
            return 'Appropriate teaching credential';
        case 'georgiateacher - gifted':
            return 'Appropriate teaching credential';
        case 'hawaiiteacher - gifted':
            return 'Appropriate teaching credential';
        case 'idahoteacher - gifted':
            return 'Appropriate teaching credential';
        case 'illinoisteacher - gifted':
            return 'Appropriate teaching credential';
        case 'indianateacher - gifted':
            return 'Appropriate teaching credential';
        case 'iowateacher - gifted':
            return 'Appropriate teaching credential';
        case 'kansasteacher - gifted':
            return 'Appropriate teaching credential';
        case 'kentuckyteacher - gifted':
            return 'Appropriate teaching credential';
        case 'louisianateacher - gifted':
            return 'Appropriate teaching credential';
        case 'maineteacher - gifted':
            return 'Appropriate teaching credential';
        case 'marylandteacher - gifted':
            return 'Appropriate teaching credential';
        case 'massachusettsteacher - gifted':
            return 'Appropriate teaching credential';
        case 'michiganteacher - gifted':
            return 'Appropriate teaching credential';
        case 'minnesotateacher - gifted':
            return 'Appropriate teaching credential';
        case 'mississippiteacher - gifted':
            return 'Appropriate teaching credential';
        case 'missouriteacher - gifted':
            return 'Appropriate teaching credential';
        case 'montanateacher - gifted':
            return 'Appropriate teaching credential';
        case 'nebraskateacher - gifted':
            return 'Appropriate teaching credential';
        case 'nevadateacher - gifted':
            return 'Appropriate teaching credential';
        case 'new hampshireteacher - gifted':
            return 'Appropriate teaching credential';
        case 'new jerseyteacher - gifted':
            return 'Appropriate teaching credential';
        case 'new mexicoteacher - gifted':
            return 'Appropriate teaching credential';
        case 'new yorkteacher - gifted':
            return 'Appropriate teaching credential';
        case 'north carolinateacher - gifted':
            return 'Appropriate teaching credential';
        case 'north dakotateacher - gifted':
            return 'Appropriate teaching credential';
        case 'ohioteacher - gifted':
            return 'Appropriate teaching credential';
        case 'oklahomateacher - gifted':
            return 'Appropriate teaching credential';
        case 'oregonteacher - gifted':
            return 'Appropriate teaching credential';
        case 'pennslyvaniateacher - gifted':
            return 'Appropriate teaching credential';
        case 'rhode islandteacher - gifted':
            return 'Appropriate teaching credential';
        case 'south carolinateacher - gifted':
            return 'Appropriate teaching credential';
        case 'south dakotateacher - gifted':
            return 'Appropriate teaching credential';
        case 'tennesseeteacher - gifted':
            return 'Appropriate teaching credential';
        case 'texasteacher - gifted':
            return 'Appropriate teaching credential';
        case 'utahteacher - gifted':
            return 'Appropriate teaching credential';
        case 'vermontteacher - gifted':
            return 'Appropriate teaching credential';
        case 'virginiateacher - gifted':
            return 'Appropriate teaching credential';
        case 'washingtonteacher - gifted':
            return 'Appropriate teaching credential';
        case 'west virginiateacher - gifted':
            return 'Appropriate teaching credential';
        case 'wisconsinteacher - gifted':
            return 'Appropriate teaching credential';
        case 'wyomingteacher - gifted':
            return 'Appropriate teaching credential';

            
    //Guidance Counselor coded as guid counselor 
        case 'arkansasguid counselor':
            return 'Educator Credential: Guidence & School Counseling (K-12)';
        case 'californiaguid counselor':
            return 'Educator Credential: Pupil Services Personnel w/ School Counseling';
        case 'connecticutguid counselor':
            return 'Educator Credential: Guidance Counselor - Elementary \n Guidance Counselor - Secondary \n Note: Secondary is middle/high schools';
        case 'floridaguid counselor':
            return 'Educator Credential: Guidance & Counseling (PK-12)';
        case 'georgiaguid counselor':
            return 'See School Counselor';
        case 'hawaiiguid counselor':
            return 'Educator Credential: Teaching Certificate w/ Guidance Endorsement'
        case 'idahoguid counselor':
            return 'See School Counselor';
        case 'iowaguid counselor':
            return 'See School Counselor';
        case 'louisianaguid counselor':
            return 'Educator Credential: Guidance Counselor K-12';
        case 'marylandguid counselor':
            return 'Educator Credential: Pupil Personnel Worker Credential \n See: COMAR 13A.12.03.04';
        case 'massachusettsguid counselor':
            return 'Educator Crednetial: Academic: Professional Support Personnel License';
        case 'michiganguid counselor':
            return 'See School Counselor';
        case 'mississippiguid counselor':
            return 'See School Counselor';
        case 'missouriguid counselor':
            return 'Teaching License w/ Guidance Endorsement';
        case 'montanaguid counselor':
            return 'See School Counselor';
        case 'nebraskaguid counselor':
            return 'See School Counselor';
        case 'new yorkguid counselor':
            return 'See School Counselor';
        case 'north carolinaguid counselor':
            return 'See School Counselor';
        case 'north dakotaguid counselor':
            return 'See School Counselor';
        case 'ohioguid counselor':
            return 'See School Counselor';
        case 'oklahomaguid counselor':
            return 'See School Counselor';
        case 'pennslyvaniaguid counselor':
            return 'See School Counselor';
        case 'rhode islandguid counselor':
            return 'See School Counselor';
        case 'south carolinaguid counselor':
            return 'Educator Credential: Counselor/Guidance - Elementary \n School Counselor/Guidance - Secondary \nAssociate Guidance - Secondary';
        case 'texasguid counselor':
            return 'See School Counselor';
        case 'utahguid counselor':
            return 'See School Counselor';
        case 'west virginiaguid counselor':
            return 'See School Counselor';
        case 'wisconsinguid counselor':
            return 'See School Counselor';
        case 'wyomingguid counselor':
            return 'See School Counselor';
        
            
    //Instructional Assistant as ia 
        case 'maineia':
            return 'Educator Credential: Education Technician Credential \n Note: Must have HS Diploma or GED to apply';
        case 'massachusettsia':
            return 'No educator credential needed';
        case 'new hampshireia':
            return 'Educator Credential: Paraeducator I or II';
        case 'new mexicoia':
            return 'Educator Credential: Support Provider License (Educational Assistant Endorsement)';
        case 'new yorkia':
            return 'New York City: Paraprofessional Credential \n Outside NYC: Teaching Assistant - Level I,II, or III';
        case 'oregonia':
            return 'No educator credential needed';
        case 'tennesseeia':
            return 'No educator credential needed but must meet requirements:\n High School Diploma, GED or HiSET';
        case 'texasia':
            return 'Educator Credential: Educational Aide I,II or III';
        case 'virginiaia':
            return 'No educator credential needed';
        
    //interpreter (non ASL)
        case 'alabamainterpreter':
            return 'See Paraprofessional'; 
        case 'alaskainterpreter':
            return 'See Paraprofessional';
        case 'arizonainterpreter':
            return 'See Paraprofesisonal';
        case 'arkansasinterpreter':
            return 'See Paraprofessional';
        case 'californiainterpreter':
            return 'See Paraprofesisonal';
        case 'coloradointerpreter':
            return 'See Paraprofesisonal';
        case 'connecticutinterpreter':
            return 'See Paraprofesisonal';
        case 'delawareinterpreter':
           return 'See Paraprofesisonal';
        case 'dcinterpreter':
            return 'See Paraprofesisonal';
        case 'floridainterpreter':
            return 'See Paraprofesisonal';
        case 'georgiainterpreter':
            return 'See Paraprofesisonal';
        case 'hawaiiinterpreter':
            return 'See Paraprofesisonal';
        case 'idahointerpreter':
            return 'See Paraprofessional';
        case 'illinoisinterpreter':
            return 'See Paraprofesisonal';
        case 'indianainterpreter':
            return 'See Paraprofesisonal';
        case 'iowainterpreter':
           return 'See Paraprofesisonal';
        case 'kansasinterpreter':
           return 'See Paraprofesisonal';
        case 'kentuckyinterpreter':
            return 'See Paraprofesisonal';
        case 'louisianainterpreter':
            return 'See Paraprofesisonal';
        case 'maineinterpreter':
            return 'See Paraprofesisonal';
        case 'marylandinterpreter':
           return 'See Paraprofesisonal';
        case 'massachusettsinterpreter':
            return 'See Paraprofesisonal';
        case 'michigantinterpreter':
           return 'See Paraprofesisonal';
        case 'minnesotatinterpreter':
            return 'See Paraprofesisonal';
        case 'mississippiinterpreter':
            return 'See Paraprofesisonal';
        case 'missouriinterpreter':
           return 'See Paraprofesisonal';
        case 'montanainterpreter':
            return 'See Paraprofesisonal';
        case 'nebraskainterpreter':
            return 'See Paraprofesisonal';
        case 'nevadainterpreter':
            return 'See Paraprofesisonal';
        case 'new hampshireinterpreter':
           return 'See Paraprofesisonal';
        case 'new jerseyinterpreter':
            return 'See Paraprofesisonal';
        case 'new mexicotinterpreter':
            return 'Educator Credential: Support Provider License (Educational Assistant License)';
        case 'new yorkinterpreter':
            return 'See Paraprofesisonal';
        case 'north carolinainterpreter':
            return 'See Paraprofesisonal';
        case 'north dakotainterpreter':
            return 'See Paraprofesisonal';
        case 'ohioteinterpreter':
            return 'See Paraprofesisonal';
        case 'oklahomainterpreter':
            return 'See Paraprofesisonal';
        case 'oregoninterpreter':
            return 'See Paraprofesisonal';
        case 'pennslyvaniainterpreter':
           return 'See Paraprofesisonal';
        case 'rhode islandinterpreter':
           return 'See Paraprofesisonal';
        case 'south carolinainterpreter':
           return 'See Paraprofesisonal';
        case 'south dakotainterpreter':
          return 'See Paraprofesisonal';
        case 'tennesseeinterpreter':
           return 'See Paraprofesisonal';
        case 'texasinterpreter':
           return 'See Paraprofesisonal';
        case 'utahinterpreter':
           return 'See Paraprofesisonal';
        case 'vermontinterpreter':
           return 'See Paraprofesisonal';
        case 'virginiainterpreter':
           return 'See Paraprofesisonal';
        case 'washingtontinterpreter':
           return 'See Paraprofesisonal';
        case 'west virginiainterpreter':
           return 'See Paraprofesisonal';
        case 'wisconsintinterpreter':
            return 'See Paraprofesisonal';
        case 'wyominginterpreter':
            return 'See Paraprofesisonal';

            
    //ldtc 
        case 'new jerseyldtc':
            return 'Educator Credential: Educational Services Certification with Learning Disabilities Teacher-Consultant Endorsement';


    //teacher - math
        case 'alabamateacher - math':
            return 'Appropriate teaching credential'; 
        case 'alaskateacher - math':
            return 'Appropriate teaching credential';
        case 'arizonateacher - math':
            return 'Appropriate teaching credential';
        case 'arkansasteacher - math':
            return 'Appropriate teaching credential';
        case 'californiateacher - math':
            return 'Appropriate teaching credential';
        case 'coloradoteacher - math':
            return 'Appropriate teaching credential';
        case 'connecticutteacher - math':
            return 'Appropriate teaching credential';
        case 'delawareteacher - math':
            return 'Appropriate teaching credential';
        case 'dcteacher - math':
            return 'Appropriate teaching credential';
        case 'floridateacher - math':
            return 'Appropriate teaching credential';
        case 'georgiateacher - math':
            return 'Appropriate teaching credential';
        case 'hawaiiteacher - math':
            return 'Appropriate teaching credential';
        case 'idahoteacher - math':
            return 'Appropriate teaching credential';
        case 'illinoisteacher - math':
            return 'Appropriate teaching credential';
        case 'indianateacher - math':
            return 'Appropriate teaching credential';
        case 'iowateacher - math':
            return 'Appropriate teaching credential';
        case 'kansasteacher - math':
            return 'Appropriate teaching credential';
        case 'kentuckyteacher - math':
            return 'Appropriate teaching credential';
        case 'louisianateacher - math':
            return 'Appropriate teaching credential';
        case 'maineteacher - math':
            return 'Appropriate teaching credential';
        case 'marylandteacher - math':
            return 'Appropriate teaching credential';
        case 'massachusettsteacher - math':
            return 'Appropriate teaching credential';
        case 'michiganteacher - math':
            return 'Appropriate teaching credential';
        case 'minnesotateacher - math':
            return 'Appropriate teaching credential';
        case 'mississippiteacher - math':
            return 'Appropriate teaching credential';
        case 'missouriteacher - math':
            return 'Appropriate teaching credential';
        case 'montanateacher - math':
            return 'Appropriate teaching credential';
        case 'nebraskateacher - math':
            return 'Appropriate teaching credential';
        case 'nevadateacher - math':
            return 'Appropriate teaching credential';
        case 'new hampshireteacher - math':
            return 'Appropriate teaching credential';
        case 'new jerseyteacher - math':
            return 'Appropriate teaching credential';
        case 'new mexicoteacher - math':
            return 'Appropriate teaching credential';
        case 'new yorkteacher - math':
            return 'Appropriate teaching credential';
        case 'north carolinateacher - math':
            return 'Appropriate teaching credential';
        case 'north dakotateacher - math':
            return 'Appropriate teaching credential';
        case 'ohioteacher - math':
            return 'Appropriate teaching credential';
        case 'oklahomateacher - math':
            return 'Appropriate teaching credential';
        case 'oregonteacher - math':
            return 'Appropriate teaching credential';
        case 'pennslyvaniateacher - math':
            return 'Appropriate teaching credential';
        case 'rhode islandteacher - math':
            return 'Appropriate teaching credential';
        case 'south carolinateacher - math':
            return 'Appropriate teaching credential';
        case 'south dakotateacher - math':
            return 'Appropriate teaching credential';
        case 'tennesseeteacher - math':
            return 'Appropriate teaching credential';
        case 'texasteacher - math':
            return 'Appropriate teaching credential';
        case 'utahteacher - math':
            return 'Appropriate teaching credential';
        case 'vermontteacher - math':
            return 'Appropriate teaching credential';
        case 'virginiateacher - math':
            return 'Appropriate teaching credential';
        case 'washingtonteacher - math':
            return 'Appropriate teaching credential';
        case 'west virginiateacher - math':
            return 'Appropriate teaching credential';
        case 'wisconsinteacher - math':
            return 'Appropriate teaching credential';
        case 'wyomingteacher - math':
            return 'Appropriate teaching credential';
    //para
        case 'alabamapara':
            return qual + 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam';
        case 'alaskapara':
            return qual + 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam \n Note: Qualifications to not apply to translators';
        case 'arizonapara':
            return 'No educator credential needed';
        case 'arkansaspara':
            return 'No educator credential needed';
        case 'californiapara':
            return 'No educator credential needed';
        case 'coloradopara':
            return 'No educator credential needed';
        case 'connecticutpara':
            return 'No educator credential needed';
        case 'delawarepara':
            return 'Educator Credential: Paraeducator Permit';
        case 'dcpara':
            return 'No educator credential \n Note: DC has various classification of aides. See: https://dcps.dc.gov/page/educational-aides';
        case 'floridapara':
            return 'No educator credential needed';
        case 'georgiapara':
            return 'Educator Credential: Paraprofessional License';
        case 'hawaiiparap':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam';
        case 'idahopara':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam';
        case 'illinoispara':
            return 'Educator Licensure: Paraprofessional Certificate \n Note: Eff. 08/2022 - Paras can work w/ HS Diploma while working towards their license';
        case 'indianapara':
            return 'No educator credential needed';
        case 'iowapara':
            return 'Educator Credential: Paraprofessional Certification \n Note: Cert. issued by Board of Educational Examiners (BOEE)';
        case 'kansasparap':
            return 'No educator credential needed';
        case 'kentuckyparap':
            return 'No educator credential needed';
        case 'louisianapara':
            return 'No educator credential needed';
        case 'mainepara':
            return 'Educator Credential: Educational Technician';
        case 'marylandpara':
            return 'No educator credential needed';
        case 'massachusettspara':
            return 'No educator credential needed';
        case 'michiganpara':
            return 'No educator credential needed';
        case 'minnesotapara':
            return 'No educator credential required, but voluntary Paraprofessional Credential available. \n See:https://mn.gov/pelsb/assets/Voluntary%20Paraprofessional%20Credential%2012.01.2021_tcm1113-512299.pdf​​​​​​​';
        case 'mississippipara':
            return 'No educator credential needed';
        case 'missouripara':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam';
        case 'montanapara':
            return 'No educator credential needed';
        case 'nebraskapara':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam';
        case 'nevadapara':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam';
        case 'new hampshirepara':
            return 'Educator Credential: Paraeducator I or Paraeducator II';
        case 'new jerseypara':
            return 'No educator credential needed';
        case 'new mexicopara':
            return 'PED Level III Support Provider License (Educational Assistant License)';
        case 'new yorkpara':
            return 'NYC: Paraprofessional \n Outside NYC: Teaching Assistant Credential (Level I,II, or III)';
        case 'north carolinapara':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam';
        case 'north dakotapara':
            return 'Educator Credential: Paraprofessional Certificate of Completion (DPI) or \n Special Education Technician Certificate of Completion (DPI)';
        case 'ohiopara':
            return 'Educator Credential: Educational Aide Permit or \n Associate License (ESSA Qualified)';
        case 'oklahomaparap':
            return 'Educator Licensure: Paraprofessional Credential \n Note: OK uses Tiers: \nTier 1: Can work in GenEd Settings & Title I schools\nTier 2: Can work in Special Education setting';
        case 'oregonpara':
            return 'See Instructional Assistant';
        case 'pennslyvaniapara':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam';
        case 'rhode islandpara':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam';
        case 'south carolinapara':
            return 'No educator credential needed';
        case 'south dakotapara':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam';
        case 'tennesseepara':
            return 'See Instructional Assistant';
        case 'texaspara':
            return 'See Instructional Assistant';
        case 'utahpara':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam\n' + 'Note: Does not apply to translators';
        case 'vermontpara':
            return 'No educator creddential needed';
        case 'virginiapara':
            return 'No educator credential needed';
        case 'washingtonpara':
            return 'Paras must have: (1) Associates Degree or Higher, or (2) pass approved exam or Completed apprenticeship as Paraeducator';
        case 'west virginiapara':
            return 'Educator Credential: Paraprofessional Certificate \n Note: Not needed if candidate holds a valid out of state teaching certificate or experied WV Professional Teaching Certificate';
        case 'wisconsinpara':
            return 'Educator License: Special Education Aide';
        case 'wyomingpara':
            return 'Each District determines their own requirements for this postion.';

    //reading spec Reading Specialist 
        case 'alabamareading spec':
            return 'Appropriate teaching credential'; 
        case 'alaskareading spec':
            return 'Appropriate teaching credential';
        case 'arizonareading spec':
            return 'Appropriate teaching credential';
        case 'arkansasreading spec':
            return 'Appropriate teaching credential';
        case 'californiareading spec':
            return 'Appropriate teaching credential';
        case 'coloradoreading spec':
            return 'Appropriate teaching credential';
        case 'connecticutreading spec':
            return 'Appropriate teaching credential';
        case 'delawarereading spec':
            return 'Appropriate teaching credential';
        case 'dcreading spec':
            return 'Appropriate teaching credential';
        case 'floridareading spec':
            return 'Appropriate teaching credential';
        case 'georgiareading spec':
            return 'Appropriate teaching credential';
        case 'hawaiireading spec':
            return 'Appropriate teaching credential';
        case 'idahoreading spec':
            return 'Appropriate teaching credential';
        case 'illinoisreading spec':
            return 'Appropriate teaching credential';
        case 'indianareading spec':
            return 'Appropriate teaching credential';
        case 'iowareading spec':
            return 'Appropriate teaching credential';
        case 'kansasreading spec':
            return 'Appropriate teaching credential';
        case 'kentuckyreading spec':
            return 'Appropriate teaching credential';
        case 'louisianareading spec':
            return 'Appropriate teaching credential';
        case 'mainereading spec':
            return 'Appropriate teaching credential';
        case 'marylandreading spec':
            return 'Appropriate teaching credential';
        case 'massachusettsreading spec':
            return 'Appropriate teaching credential';
        case 'michiganreading spec':
            return 'Appropriate teaching credential';
        case 'minnesotareading spec':
            return 'Appropriate teaching credential';
        case 'mississippireading spec':
            return 'Appropriate teaching credential';
        case 'missourireading spec':
            return 'Appropriate teaching credential';
        case 'montanareading spec':
            return 'Appropriate teaching credential';
        case 'nebraskareading spec':
            return 'Appropriate teaching credential';
        case 'nevadareading spec':
            return 'Appropriate teaching credential';
        case 'new hampshirereading spec':
            return 'Appropriate teaching credential';
        case 'new jerseyreading spec':
            return 'Appropriate teaching credential';
        case 'new mexicoreading spec':
            return 'Appropriate teaching credential';
        case 'new yorkreading spec':
            return 'Appropriate teaching credential';
        case 'north carolinareading spec':
            return 'Appropriate teaching credential';
        case 'north dakotareading spec':
            return 'Appropriate teaching credential';
        case 'ohioreading spec':
            return 'Appropriate teaching credential';
        case 'oklahomareading spec':
            return 'Appropriate teaching credential';
        case 'oregonreading spec':
            return 'Appropriate teaching credential';
        case 'pennslyvaniareading spec':
            return 'Appropriate teaching credential';
        case 'rhode islandreading spec':
            return 'Appropriate teaching credential';
        case 'south carolinareading spec':
            return 'Appropriate teaching credential';
        case 'south dakotareading spec':
            return 'Appropriate teaching credential';
        case 'tennesseereading spec':
            return 'Appropriate teaching credential';
        case 'texasreading spec':
            return 'Appropriate teaching credential';
        case 'utahreading spec':
            return 'Appropriate teaching credential';
        case 'vermontreading spec':
            return 'Appropriate teaching credential';
        case 'virginiareading spec':
            return 'Appropriate teaching credential';
        case 'washingtonreading spec':
            return 'Appropriate teaching credential';
        case 'west virginiareading spec':
            return 'Appropriate teaching credential';
        case 'wisconsinreading spec':
            return 'Appropriate teaching credential';
        case 'wyomingreading spec':
            return 'Appropriate teaching credential';

            
    //sli - Sign Language Interpreter 

    //teacher - sped
        case 'alabamateacher - sped':
            return 'Appropriate teaching credential'; 
        case 'alaskateacher - sped':
            return 'Appropriate teaching credential';
        case 'arizonateacher - sped':
            return 'Appropriate teaching credential';
        case 'arkansasteacher - sped':
            return 'Appropriate teaching credential';
        case 'californiateacher - sped':
            return 'Appropriate teaching credential';
        case 'coloradoteacher - sped':
            return 'Appropriate teaching credential';
        case 'connecticutteacher - sped':
            return 'Appropriate teaching credential';
        case 'delawareteacher - sped':
            return 'Appropriate teaching credential';
        case 'dcteacher - sped':
            return 'Appropriate teaching credential';
        case 'floridateacher - sped':
            return 'Appropriate teaching credential';
        case 'georgiateacher - sped':
            return 'Appropriate teaching credential';
        case 'hawaiiteacher - sped':
            return 'Appropriate teaching credential';
        case 'idahoteacher - sped':
            return 'Appropriate teaching credential';
        case 'illinoisteacher - sped':
            return 'Appropriate teaching credential';
        case 'indianateacher - sped':
            return 'Appropriate teaching credential';
        case 'iowateacher - sped':
            return 'Appropriate teaching credential';
        case 'kansasteacher - sped':
            return 'Appropriate teaching credential';
        case 'kentuckyteacher - sped':
            return 'Appropriate teaching credential';
        case 'louisianateacher - sped':
            return 'Appropriate teaching credential';
        case 'maineteacher - sped':
            return 'Appropriate teaching credential';
        case 'marylandteacher - sped':
            return 'Appropriate teaching credential';
        case 'massachusettsteacher - sped':
            return 'Appropriate teaching credential';
        case 'michiganteacher - sped':
            return 'Appropriate teaching credential';
        case 'minnesotateacher - sped':
            return 'Appropriate teaching credential';
        case 'mississippiteacher - sped':
            return 'Appropriate teaching credential';
        case 'missouriteacher - sped':
            return 'Appropriate teaching credential';
        case 'montanateacher - sped':
            return 'Appropriate teaching credential';
        case 'nebraskateacher - sped':
            return 'Appropriate teaching credential';
        case 'nevadateacher - sped':
            return 'Appropriate teaching credential';
        case 'new hampshireteacher - sped':
            return 'Appropriate teaching credential';
        case 'new jerseyteacher - sped':
            return 'Appropriate teaching credential';
        case 'new mexicoteacher - sped':
            return 'Appropriate teaching credential';
        case 'new yorkteacher - sped':
            return 'Appropriate teaching credential';
        case 'north carolinateacher - sped':
            return 'Appropriate teaching credential';
        case 'north dakotateacher - sped':
            return 'Appropriate teaching credential';
        case 'ohioteacher - sped':
            return 'Appropriate teaching credential';
        case 'oklahomateacher - sped':
            return 'Appropriate teaching credential';
        case 'oregonteacher - sped':
            return 'Appropriate teaching credential';
        case 'pennslyvaniateacher - sped':
            return 'Appropriate teaching credential';
        case 'rhode islandteacher - sped':
            return 'Appropriate teaching credential';
        case 'south carolinateacher - sped':
            return 'Appropriate teaching credential';
        case 'south dakotateacher - sped':
            return 'Appropriate teaching credential';
        case 'tennesseeteacher - sped':
            return 'Appropriate teaching credential';
        case 'texasteacher - sped':
            return 'Appropriate teaching credential';
        case 'utahteacher - sped':
            return 'Appropriate teaching credential';
        case 'vermontteacher - sped':
            return 'Appropriate teaching credential';
        case 'virginiateacher - sped':
            return 'Appropriate teaching credential';
        case 'washingtonteacher - sped':
            return 'Appropriate teaching credential';
        case 'west virginiateacher - sped':
            return 'Appropriate teaching credential';
        case 'wisconsinteacher - sped':
            return 'Appropriate teaching credential';
        case 'wyomingteacher - sped':
            return 'Appropriate teaching credential';
    

    //rbt 
        case 'alabamarbt':
            return 'National Certification as RBT'; 
        case 'alaskarbt':
            return 'National Certification as RBT'; 
        case 'arizonarbt':
            return 'National Certification as RBT'; 
        case 'arkansasrbt':
            return 'National Certification as RBT'; 
        case 'californiarbt':
            return 'National Certification as RBT'; 
        case 'coloradorbt':
            return 'National Certification as RBT'; 
        case 'connecticutrbt':
            return 'National Certification as RBT'; 
        case 'delawarerbt':
            return 'National Certification as RBT'; 
        case 'dcrbt':
            return 'National Certification as RBT'; 
        case 'floridarbt':
            return 'National Certification as RBT'; 
        case 'georgiarbt':
            return 'National Certification as RBT'; 
        case 'hawaiirbt':
            return 'National Certification as RBT'; 
        case 'idahorbt':
            return 'National Certification as RBT'; 
        case 'illinoisrbt':
            return 'National Certification as RBT'; 
        case 'indianarbt':
            return 'National Certification as RBT'; 
        case 'iowarbt':
            return 'National Certification as RBT'; 
        case 'kansasrbt':
            return 'National Certification as RBT'; 
        case 'kentuckyrbt':
            return 'National Certification as RBT'; 
        case 'louisianarbt':
            return 'National Certification as RBT'; 
        case 'mainerbt':
            return 'National Certification as RBT'; 
        case 'marylandrbt':
            return 'National Certification as RBT'; 
        case 'massachusettsrbt':
            return 'National Certification as RBT'; 
        case 'michiganrbt':
            return 'National Certification as RBT'; 
        case 'minnesotarbt':
            return 'National Certification as RBT'; 
        case 'mississippirbt':
            return 'National Certification as RBT'; 
        case 'missourirbt':
            return 'National Certification as RBT'; 
        case 'montanarbt':
            return 'National Certification as RBT'; 
        case 'nebraskarbt':
            return 'National Certification as RBT'; 
        case 'nevadarbt':
            return 'National Certification as RBT'; 
        case 'new hampshirerbt':
            return 'National Certification as RBT'; 
        case 'new jerseyrbt':
            return 'National Certification as RBT'; 
        case 'new mexicorbt':
            return 'National Certification as RBT'; 
        case 'new yorkrbt':
            return 'National Certification as RBT'; 
        case 'north carolinarbt':
            return 'National Certification as RBT'; 
        case 'north dakotarbt':
            return 'National Certification as RBT'; 
        case 'ohiorbt':
            return 'National Certification as RBT'; 
        case 'oklahomarbt':
            return 'Appropriate teaching credential';
        case 'oregonrbt':
            return 'State Licensure: Registerd Behavior Analysis Interventionist and \n National Certification as RBT'; 
        case 'pennslyvaniarbt':
            return 'National Certification as RBT'; 
        case 'rhode islandrbt':
            return 'National Certification as RBT'; 
        case 'south carolinarbt':
            return 'National Certification as RBT'; 
        case 'south dakotarbt':
            return 'National Certification as RBT'; 
        case 'tennesseerbt':
            return 'National Certification as RBT'; 
        case 'texasrbt':
            return 'National Certification as RBT'; 
        case 'utahrbt':
            return 'National Certification as RBT'; 
        case 'vermontrbt':
            return 'National Certification as RBT'; 
        case 'virginiarbt':
            return 'National Certification as RBT'; 
        case 'washingtonrbt':
            return 'State Licensure: Certified Behavior Technician and \n National Certification as RBT'; 
        case 'west virginiateacher - sped':
            return 'National Certification as RBT'; 
        case 'wisconsinrbt':
            return 'National Certification as RBT'; 
        case 'wyomingrbt':
            return 'National Certification as RBT'; 
    //aba
        case 'massachusettsaba':
            return 'No state license needed\n No educator credential needed';

            
    //ed diag only in LA, TX, NM, WY
        case 'lousianaed diag':
            return'Educator Credential: Ancillary Educational Diagnostican Certificate';
        case 'texased diag':
            return 'Educator Credential: Educational Diagnostician (K-12)';
        case 'new mexicoed diago':
            return 'Educator Credential: Educational Diagnosgican (PreK-12) ';
        case 'wyominged diag':
            return 'Educator Credential: Educator License with Educational Diagnostican (K-12) Endorsement';

            
    //psychometrist -- AL,AK, MD, MS,MO,OK, SD only  
        
        case 'alabamapsychometrist':
            return 'Educator Credential: A or AA School Psychometrist Certificate (P-12)';
        case 'alaskapsychometrist':
            return 'Educator Credential: Special Services Certificate (Type C) with School Psychometry Endorsement';
        case 'marylandpsychometrist':
            return 'Educator Credential: School Psychometrist Certificate';
        case 'missississippipsychometrist':
            return 'Educator License: Educator License with Psychometrist Endorsement (213)';
        case 'missouripsychometrist':
            return 'Educator Credential:\n Initial or Continious Student Services Certificate for School Psychologist Endorsement OR School Psycholoical Examiner\nNote: Difference between Examiner and Psychologist is that the Examiner focuses more on testing & assessments; whereas Psychologist can offer a wider range of services';
        case 'okalhomapsychometrist':
            return 'Educator License: School Psychometrist';
        case 'south dakotapsychometrist':
            return 'See School Psychological Examiner note under School Psychologist';
     
    //teacher - dhh
        case 'alabamateacher - dhh':
            return 'Teaching Credential with Hearing Impairment Endorsement';
        case 'alaskateacher - dhh':
            return 'Teaching Credential with Deaf/Hard of Hearing Endorsement';
        case 'arizonateacher - dhh':
            return 'Teaching Credential with Deaf/Hard of Hearing (Birth-12) Endorsement';
        case 'arkansasteacher - dhh':
            return 'Special Education - Hearing Specialist K-12 Certificate';
        case 'californiateacher - dhh':
            return 'Education Specialist with Deaf/Hard of Hearing Endorsement';
        case 'coloradoteacher - dhh':
            return 'Special Education Specialist - Deaf & Hard of Hearing';
        case 'connecticutteacher - dhh':
            return 'Teaching Credential with Hard of Hearing Endorsement';
        case 'delawareteacher - dhh':
            return 'Standard Certificate: Teacher of Students who Deaf/Hard of Hearing';
        case 'dcteacher - dhh':
            return 'Appropriate teaching credential';
        case 'floridateacher - dhh':
            return 'Teacher Certificate in Deaf or Hard of Hearing';
        case 'georgiateacher - dhh':
            return 'Deaf Education Certificate';
        case 'hawaiiteacher - dhh':
            return 'Special Education Teaching Certificate with Deaf/Hard of Hearing Endorsement';
        case 'idahoteacher - dhh':
            return 'Instructional Certificate with Deaf/Hard of Hearing Endorsement';
        case 'illinoisteacher - dhh':
            return 'Professional Educator License with Deaf-Blind Specialist Endorsement';
        case 'indianateacher - dhh':
            return 'Approrpiate teaching credential';
        case 'iowateacher - dhh':
            return 'Appropriate teaching credential';
        case 'kansasteacher - dhh':
            return 'Teaching License with Deaf/Hard of Hearing Endorsement';
        case 'kentuckyteacher - dhh':
            return 'Teaching Credential with Exceptional Children with Hearing Impaired or Hearing Impaired with Sign Proficiency Endorsements';
        case 'louisianateacher - dhh':
            return 'Teaching Certificate with Deaf/Hard of Hearing Add-on';
        case 'maineteacher - dhh':
            return 'Teacher of Deaf or Hearing Impaired Certificate';
        case 'marylandteacher - dhh':
            return 'Deaf/Hard of Hearing Teaching Credential';
        case 'massachusettsteacher - dhh':
            return 'Academic: Teacher - Deaf/Hard of Hearing';
        case 'michiganteacher - dhh':
            return 'Teaching Certificate with Deaf/Hard of Hearing Endorsement';
        case 'minnesotateacher - dhh':
            return 'Special Education Teaching Credential with Deaf of Hard of Hearing Endorsement';
        case 'misssissippiteacher - dhh':
            return 'Teaching Credential with Hearing Impaired Endorsement';
        case 'missouriteacher - dhh':
            return 'Teaching Certificate with Deaf/Hard of Hearing Endorsement';
        case 'montanateacher - dhh':
            return 'Teaching License with Special Education - Hearing Impaired Endorsement';
        case 'nebraskateacher - dhh':
            return 'Special Education Deaf or Hard of Hearing Teaching Credential';
        case 'nevadateacher - dhh':
            return 'Teaching Certificate with Hearing Impaired Endorsements';
        case 'new hampshireteacher - dhh':
            return 'Special Education Teacher in Area of Deaf & Hearing Disabilities';
        case 'new jerseyteacher - dhh':
            return 'Teaching Credental with Deaf or Hard of Hearing for Oral/Aural Communication Endorsement or \n Deaf or Hard of Hearing for Sign Language Communication';
        case 'new mexicoteacher - dhh':
            return 'Deaf & Hard of Hearing Teaching License';
        case 'new yorkteacher - dhh':
            return 'Deaf/Hard of Hearing Teaching Credential';
        case 'north carolinateacher - dhh':
            return 'Teaching Credential with Exceptional Children with Deaf & Hard of Hearing Area';
        case 'north dakotateacher - dhh':
            return 'Appropriate Teaching Credential';
        case 'ohioteacher - dhh':
            return 'Intervention Specialist - Hearing Impaired';
        case 'oklahomateacher - dhh':
            return 'Special Education Educator License with Deaf/Hard of Hearing Endorsement';
        case 'oregonteacher - dhh':
            return 'Teaching License with Special Education - Deaf/Hard of Hearing Endorsement';
        case 'pennslyvaniateacher - dhh':
            return 'Educator Credential with Hearing Impaired Endorsement';
        case 'rhode islandteacher - dhh':
            return 'Educator Certificate with All Grades Special Education Deaf & Hard of Hearing (ASL/Oral/Aural Communication)';
        case 'south carolinateacher - dhh':
            return 'Appropriate Teaching Credential';
        case 'south dakotateacher - dhh':
            return 'Elemtary/Secondary Deaf or Hard of Hearing Impaired Education Endorsement';
        case 'tennesseeteacher - dhh':
            return 'Special Education Hearing PreK-12 Endorsement';
        case 'texasteacher - dhh':
            return 'Deaf & Severely Hard of Hearing or\n Hearing Impaired or \nTeacher of the Deaf & Hard of Hearing: Early Childhood certificates';
        case 'utahteacher - dhh':
            return 'Teaching License with Deaf Education Concentration';
        case 'vermontteacher - dhh':
            return 'Teaching License with Teacher of the Deaf & Hard of Hearing Endorsement';
        case 'virginiateacher - dhh':
            return 'Teaching License with Special Education - Deaf/Hard of Hearing Endorsement';
        case 'washingtonteacher - dhh':
            return 'Teaching Credential with Deaf Education Endorsement';
        case 'west virginiateacher - dhh':
            return 'Teaching Credential with Deaf & Hard of Hearing Specialization';
        case 'wisconsinteacher - dhh':
            return 'Deaf & Hard of Hearing Teaching Credential';
        case 'wyomingteacher - dhh':
            return 'Educator License with Exceptional Specialist - Deaf & Hard of Hearing Endorsement';
    
    //teacher - vi
        case 'alabamateacher - vi':
            return 'Teaching Credential with Visual Impairment Endorsement';
        case 'alaskateacher - vi':
            return 'Teaching Credential with Visual Handicapped Endorsement';
        case 'arizonateacher - vi':
            return 'Teaching Credential with Visually Impaired Endorsement';
        case 'arkansasteacher - vi':
            return 'Special Education - Visual Specialist Teaching Credential';
        case 'californiateacher - vi':
            return 'Education Specialist with Visual Impairements Endorsement';
        case 'coloradoteacher - vi':
            return 'Special Education Specialist - Visually Impaired';
        case 'connecticutteacher - vi':
            return 'Teaching Credential with Partially Sighted Endorsement';
        case 'delawareteacher - vi':
            return 'Standard Certificate: Teacher of Students with Visual Impairments';
        case 'dcteacher - vi':
            return 'Appropriate teaching credential';
        case 'floridateacher - vi':
            return 'Teacher Certificate in Visually Impaired';
        case 'georgiateacher - vi':
            return 'Visual Impairment Certificate';
        case 'hawaiiteacher - vi':
            return 'Special Education Teaching Certificate with Blind/Visually Impaired Endorsement';
        case 'idahoteacher - vi':
            return 'Instructional Certificate with Visual Impairment Endorsement';
        case 'illinoisteacher - vi':
            return 'Professional Educator License with Deaf-Blind Specialist Endorsement';
        case 'indianateacher - vi':
            return 'Approrpiate teaching credential';
        case 'iowateacher - vi':
            return 'Appropriate teaching credential';
        case 'kansasteacher - vi':
            return 'Teaching License with Visually Impaired Endorsement';
        case 'kentuckyteacher - vi':
            return 'Teaching Credential with Exceptional Children with Visually Impaired Endorsements';
        case 'louisianateacher - vi':
            return 'Teaching Certificate with Visually Impaired Add-on';
        case 'maineteacher - vi':
            return 'Teacher of Blind or Visually Impaired Certificate';
        case 'marylandteacher - vi':
            return 'Blind/Visually Impaired Teaching Credential';
        case 'massachusettsteacher - vi':
            return 'Academic: Teacher - Visually Impaired';
        case 'michiganteacher - vi':
            return 'Teaching Certificate with Visual Impairment Endorsement';
        case 'minnesotateacher - vi':
            return 'Special Education Teaching Credential with Blind or Visually Impaired Endorsement';
        case 'misssissippiteacher - vi':
            return 'Teaching Credential with Visually Impaired Endorsement';
        case 'missouriteacher - vi':
            return 'Teaching Certificate for Blind & Low Vision Endorsement';
        case 'montanateacher - vi':
            return 'Teaching License with Special Education - Vision Impaired Endorsement';
        case 'nebraskateacher - vi':
            return 'Special Education Visual Impairment Teaching Credential';
        case 'nevadateacher - vi':
            return 'Teaching Certificate with Visual Impaired Endorsements';
        case 'new hampshireteacher - vi':
            return 'Special Education Teacher in Area of Blind & Vision Disabilities';
        case 'new jerseyteacher - vi':
            return 'Teaching Credental with Blind or Visually Impaired Endorsement';
        case 'new mexicoteacher - vi':
            return 'Blind & Visually Teaching License';
        case 'new yorkteacher - vi':
            return 'Visually Impaired Teaching Credential';
        case 'north carolinateacher - vi':
            return 'Teaching Credential Exceptional Children with Visually Impaired Area';
        case 'north dakotateacher - vi':
            return 'Appropriate Teaching Credential';
        case 'ohioteacher - vi':
            return 'Intervention Specialist - Visually Impaired';
        case 'oklahomateacher - vi':
            return 'Special Education Educator License with Visual Impairment Endorsement';
        case 'oregonteacher - vi':
            return 'Teaching License with Special Education - Visually Impaired Endorsement';
        case 'pennslyvaniateacher - vi':
            return 'Educator Credential with Visually Impaired Endorsement';
        case 'rhode islandteacher - vi':
            return 'Educator Certificate with All Grades Special Education Visually Impaired Teacher';
        case 'south carolinateacher - vi':
            return 'Appropriate Teaching Credential';
        case 'south dakotateacher - vi':
            return 'Elemtary/Secondary Blind or Visually Impaired Endorsement';
        case 'tennesseeteacher - vi':
            return 'Special Education Vision PreK-12 Endorsement';
        case 'texasteacher - vi':
            return 'Deficient Vision \n Visually Handicapped \nTeacher of Stuents with Visual Impairments Supplemental (Early Childhood) certificates';
        case 'utahteacher - vi':
            return 'Teaching License with Vision Impairment Endorsement';
        case 'vermontteacher - vi':
            return 'Teaching License with Teacher of Visually Impaired Endorsement';
        case 'virginiateacher - vi':
            return 'Teaching License with Special Education - Blindness & Visual Impairments Endorsement';
        case 'washingtonteacher - vi':
            return 'Teaching Credential with Visually Impaired Endorsement';
        case 'west virginiateacher - vi':
            return 'Teaching Credential with Visual Impairment Specialization';
        case 'wisconsinteacher - vi':
            return 'Visual Impairment Teaching Credential';
        case 'wyomingteacher - vi':
            return 'Educator License with Exceptional Specialist - Visual Disability Endorsement';
    
    //translator
        case 'rhode islandtranslator':
            return 'See Instructional Assistants. Per RIDE this role falls under IA & must meet those requirements';
        case 'new mexicotranslator':
            return 'PED Support Provider License (Educational Assistant License)';
    //med asst
        case 'alabamamed asst':
            return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'alaskamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'arizonamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma'; 
        case 'arkansasmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'californiamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'coloradomed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'connecticutmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'delawaremed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'dcmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'floridamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'georgiamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'hawaiimed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'idahomed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'illinoismed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'indianamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'iowamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'kansasmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'kentucymed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'louisianamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'mainemed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'marylandmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'massachusettsmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'michiganmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'minnesotamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'mississippimed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'missourimed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'montanamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'nebraskamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'nevadamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'new hampshiremed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'new jerseymed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'new mexicomed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'new mexicomed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'new yorkmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'north carolinamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'north dakotamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma AND \n Must be registered with Board of Nursing as a Technician. If dispensing meds, must also be registered as a Medication Assistant III';
        case 'ohiomed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'oklahomamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'oregonmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'pennslyvaniamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case' rhode islandmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'south carolinamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'south dakotamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma \n Note: Medical Assistants are under joint regulatory authority of Board of Medical Examiners & Board of Nursing. They are registered under the Board of Medical Examiners';
        case 'tennesseemed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'texasmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'utahmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'vermontmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'virginiamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'washingtonmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'west virginiamed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'wisconsin medasst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
        case 'wyomingmed asst':
             return 'Certifications from: American Association of Medical Assistants (AAMA) \n American Medical Technologists (AMT)\n National Center for Competency Testing (NCTT) \n or National Healthcareer Association (NHA) or hold Registered Medical Assistant (RMA) certification, or certificate of training or diploma';
            
    //cna
        case 'alabamacna':
            return 'Certified Nursing Assistant License';
        case 'alaskacna':
            return 'Certified Nursing Assistant License';
        case 'arizonacna':
            return 'Certified Nursing Assistant License';
        case 'arkansascna':
            return 'Certified Nursing Assistant License';
        case 'californiacna':
            return 'Certified Nursing Assistant License';
        case 'coloradocna':
            return 'Certified Nursing Assistant License';
        case 'connecticutcna':
            return 'Certified Nursing Assistant License';
        case 'delawarecna':
            return 'Certified Nursing Assistant License';
        case 'dccna':
            return 'Certified Nursing Assistant License';
        case 'floridacna':
            return 'Certified Nursing Assistant License';
        case 'georgiacna':
            return 'Certified Nursing Assistant License';
        case 'hawaiicna':
            return 'Certified Nursing Assistant License';
        case 'idahocna':
            return 'Certified Nursing Assistant License';
        case 'ilinoiscna':
            return 'Certified Nursing Assistant License';
        case 'indianacna':
            return 'Certified Nursing Assistant License';
        case 'iowacna':
            return 'Certified Nursing Assistant License';
        case 'kansascna':
            return 'Certified Nursing Assistant License';
        case 'kentuckycna':
            return 'Certified Nursing Assistant License';
        case 'louisianacna':
            return 'Certified Nursing Assistant License';
        case 'mainecna':
            return 'Certified Nursing Assistant License';
        case 'marylandcna':
            return 'Certified Nursing Assistant License';
        case 'massachusettscna':
            return 'Certified Nursing Assistant License';
        case 'michigancna':
            return 'Certified Nursing Assistant License';
        case 'minnesotacna':
            return 'Certified Nursing Assistant License';
        case 'mississippicna':
            return 'Certified Nursing Assistant License';
        case 'missouricna':
            return 'Certified Nursing Assistant License';
        case 'montanacna':
            return 'Certified Nursing Assistant License';
        case 'nebraskacna':
            return 'Certified Nursing Assistant License';
        case 'nevadacna':
            return 'Certified Nursing Assistant License';
        case 'new hampshirecna':
            return 'Certified Nursing Assistant License';
        case 'new jerseycna':
            return 'Certified Nursing Assistant License';
        case 'new mexicocna':
            return 'State License: CNA License and \n Educator Credential: School Health Assistant License';
        case 'new yorkcna':
            return 'Certified Nursing Assistant License';
        case 'north carolinacna':
            return 'Certified Nursing Assistant License';
        case 'north dakotacna':
            return 'Note: ND uses title of School Health Technician. No state licensure required, just certification.\n Educator Credential: Certificate of Completion for School Health Technician (issued by Superintendent of Public Instruction)';
        case 'ohiocna':
            return 'Certified Nursing Assistant License';
        case 'oklahomacna':
            return 'Certified Nursing Assistant License';
        case 'oregoncna':
            return 'Certified Nursing Assistant License';
        case 'pennslyvaniacna':
            return 'Certified Nursing Assistant License';
        case 'rhode islandcna':
            return 'Certified Nursing Assistant License';
        case 'south carolinacna':
            return 'Certified Nursing Assistant License';
        case 'south dakotacna':
            return 'Certified Nursing Assistant License';
        case 'tennesseecna':
            return 'Certified Nursing Assistant License';
        case 'texascna':
            return 'Certified Nursing Assistant License';
        case 'utahcna':
            return 'Certified Nursing Assistant License';
        case 'vermontcna':
            return 'Certified Nursing Assistant License';
        case 'virginiacna':
            return 'Certified Nursing Assistant License';
        case 'washingtoncna':
            return 'Certified Nursing Assistant License';
        case 'west virginiacna':
            return 'Certified Nursing Assistant License';
        case 'wisconsincna':
            return 'Certified Nursing Assistant License';
        case 'wyomingcna':
            return 'Certified Nursing Assistant License';
    //lpn
        case 'alabamalpn':
            return 'State Licensure: LVN License';
        case 'alaskalpn':
            return 'State Licensure: LVN';
        case 'arizonalpn':
            return 'State Licensure: LVN';
        case 'arkansaslpn':
            return 'State Licensure: LVN';
        case 'californialpn':
            return 'State Licensure: LVN';
        case 'coloradolpn':
            return 'State Licensure: LVN';
        case 'connecticutlpn':
            return 'State Licensure: LVN';
        case 'delawarelpn':
            return 'State Licensure: LVN';
        case 'dclpn':
            return 'State Licensure: LVN';
        case 'floridalpn':
            return 'State Licensure: LVN';
        case 'georgialpn':
            return 'State Licensure: LVN';
        case 'hawaiilpn':
           return 'State Licensure: LVN';
        case 'idaholpn':
            return 'State Licensure: LVN';
        case 'ilinoislpn':
            return 'State Licensure: LVN';
        case 'indianalpn':
            return 'State Licensure: LVN';
        case 'iowalpn':
            return 'State Licensure: LVN';
        case 'kansaslpn':
            return 'State Licensure: LVN';
        case 'kentuckylpn':
            return 'State Licensure: LVN';
        case 'louisianalpn':
           return 'State Licensure: LVN';
        case 'mainelpn':
           return 'State Licensure: LVN';
        case 'marylandlpn':
           return 'State Licensure: LVN';
        case 'massachusettslpn':
            return 'State Licensure: LVN';
        case 'michiganlpn':
            return 'State Licensure: LVN';
        case 'minnesotalpn':
            return 'State Licensure: LVN';
        case 'mississippilpn':
            return 'State Licensure: LVN';
        case 'missourilpn':
            return 'State Licensure: LVN';
        case 'montanalpn':
           return 'State Licensure: LVN';
        case 'nebraskalpn':
            return 'State Licensure: LVN';
        case 'nevadalpn':
           return 'State Licensure: LVN';
        case 'new hampshirelpn':
            return 'State Licensure: LVN';
        case 'new jerseylpn':
            return 'State Licensure: LVN';
        case 'new mexicolpn':
            return 'State License: LPN License and \n Educator Credential: Licensed Practial Nurse (Instructional Support Provider) License';
        case 'new yorklpn':
           return 'State Licensure: LVN';
        case 'north carolinalpn':
           return 'State Licensure: LVN';
        case 'north dakotalpn':
            return 'Note: ND uses title of School Health Technician. State Licensure: LVN \n Educator Credential: Certificate of Completion for School Health Technician (issued by Superintendent of Public Instruction)';
        case 'ohiolpn':
            return 'State Licensure: LVN';
        case 'oklahomalpn':
            return 'State Licensure: LVN';
        case 'oregonlpn':
            return 'State Licensure: LVN';
        case 'pennslyvanialpn':
            return 'State Licensure: LVN';
        case 'rhode islandlpn':
           return 'State Licensure: LVN';
        case 'south carolinalpn':
            return 'State Licensure: LVN';
        case 'south dakotalpn':
            return 'State Licensure: LVN';
        case 'tennesseelpn':
            return 'State Licensure: LVN';
        case 'texaslpn':
            return 'State Licensure: LVN';
        case 'utahlpn':
            return 'State Licensure: LVN';
        case 'vermontlpn':
            return 'State Licensure: LVN';
        case 'virginialpn':
            return 'State Licensure: LVN';
        case 'washingtonlpn':
            return 'State Licensure: LVN';
        case 'west virginialpn':
            return 'State Licensure: LVN';
        case 'wisconsinlpn':
            return 'State Licensure: LVN';
        case 'wyominglpn':
            return 'State Licensure: LVN';
    //rn
        case 'alabamarn':
            return 'Registered Nurse license';
        case 'alaskarn':
            return 'Registered Nurse license';
        case 'alabamarn':
            return 'Registered Nurse license';
        case 'arizonarn':
            return 'Registered Nurse license';
        case 'arkansasrn':
            return 'Registered Nurse license';
        case 'californiarn':
            return 'Registered Nurse license';
        case 'coloradorn':
            return 'Registered Nurse license';
        case 'connecticutrn':
            return 'Registered Nurse license';
        case 'delawarern':
            return 'Registered Nurse license';
        case 'dcrn':
            return 'Registered Nurse license';
        case 'floridarn':
            return 'Registered Nurse license';
        case 'georgiarn':
            return 'Registered Nurse license';
        case 'hawaiirn':
            return 'Registered Nurse license';
        case 'idahorn':
            return 'Registered Nurse license';
        case 'illinoisrn':
            return 'Registered Nurse license';
        case 'indianarn':
            return 'Registered Nurse license';
        case 'iowarn':
            return 'Registered Nurse license';
        case 'kansasrn':
            return 'Registered Nurse license';
        case 'kentuckyrn':
            return 'Registered Nurse license';
        case 'louisianarn':
            return 'Registered Nurse license';
        case 'mainern':
            return 'Registered Nurse license';
        case 'marylandrn':
            return 'Registered Nurse license';
        case 'massachusettsrn':
            return 'Registered Nurse license';
        case 'michiganrn':
            return 'Registered Nurse license';
        case 'minnesotarn':
            return 'Registered Nurse license';
        case 'mississippirn':
            return 'Registered Nurse license';
        case 'missourirn':
            return 'Registered Nurse license';
        case 'montanarn':
            return 'Registered Nurse license';
        case 'nebraskarn':
            return 'Registered Nurse license';
        case 'nevadarn':
            return 'Registered Nurse license';
        case 'new hampshirern':
            return 'Registered Nurse license';
        case 'new jerseyrn':
            return 'Registered Nurse license';
        case 'new mexicorn':
            return 'See School Nurse';
        case 'new yorkrn':
            return 'Registered Nurse license';
        case 'north carolinarn':
            return 'Registered Nurse license';
        case 'north dakotarn':
            return 'State Licensure: RN \n Educator Credential: Certificate of Completion for School Health Technician (issued by Superintendent of Public Instruction)';
        case 'ohiorn':
            return 'See School Nurse'
        case 'oklahomarn':
            return 'Registered Nurse license';
        case 'oregonrn':
            return 'Registered Nurse license';
        case 'pennslyvania':
            return 'Registered Nurse license';
        case 'rhode islandrn':
            return 'Registered Nurse license';
        case 'south carolinarn':
            return 'Registered Nurse license';
        case 'south dakotarn':
            return 'Registered Nurse license';
        case 'tennesseern':
            return 'Registered Nurse license';
        case 'texasrn':
            return 'Registered Nurse license';
        case 'utahrn':
            return 'Registered Nurse license';
        case 'vermontrn':
            return 'Registered Nurse license';
        case 'virginiarn':
            return 'Registered Nurse license';
        case 'washingtonrn':
            return 'Registered Nurse license';
        case 'west virginiarn':
            return 'Registered Nurse license';
        case 'wisconsinrn':
            return 'Registered Nurse license';
        case 'wyomingrn':
            return 'Registered Nurse license';
       
    //csn 
        case 'alabamacsn':
            return 'State License: RN \n No educator crednetial needed';
        case 'alaskacsn':
            return 'State License: RN \n Educator Credential: Special Services Certificate (Type C) with School Nursing Endorsement';
        case 'arizonacsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'arkansascsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'californiacsn':
            return 'State Licensure: RN \n Educator Credential: Pupil Service License with School Nurse Endorsement';
        case 'coloradocsn':
            return 'State Licensure: RN \n Educator Credential: Special Services Provider with School Nurse Endorsement';
        case 'connecticutcsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'delawarecsn':
            return 'State Licensure: RN \n Educator Credential: Educator License with School Nursing Endorsement';
        case 'dccsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'floridacsn':
            return 'State Liensure: RN \n No educator credential needed';
        case 'georgiacsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'hawaiicsn':
            return 'State Licensure: RN \n Note: Must have Bachelors in Nursing Science.\n No educator credential required';
        case 'idahocsn':
            return 'State Licensure: RN \n Educator Credential with School Nurse Endorsement';
        case 'illinoiscsn':
            return 'State Licensure: RN \n Educator Credential: Professional Educator License with endorsement in School Nursing';
        case 'indianacsn':
            return 'State Licensure: RN \n Educator Credential: School Nurse License';
        case 'iowacsn':
            return 'State Licensure: RN \n Educator Credential: School Nurse License (or Statement of Professional Recognition)';
        case 'kansascsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'kentuckycsn':
            return 'State Licensure: RN \n Educator Credential: Provisional or Professional Certificate for School Nurse';
        case 'louisianacsn':
            return 'State Licensure: RN \n Educator Credential: Ancillary School Services Certificate (Type A,B, or C)';
        case 'mainecsn':
            return 'State Licensure: RN \n Educator Credential: School Nurse Certificate';
        case 'marylandcsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'massachusettscsn':
            return 'State Licensure: RN \n Educator Credential: Professional Support Personnel License';
        case 'michigancsn':
            return 'State Licensure: RN \n Educator Credential: School Nurse Credential \n Note: Interim Certification is available if they only have an RN license';
        case 'minnesotacsn':
            return 'State Licensure: RN license & Public Health Nurse License \n Educator Credential: School Nurse License';
        case 'mississippicsn':
            return 'State Licensure: RN \n No educator credential needed \n Note: Required to have CPR/BLS Certification';
        case 'missouricsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'montanacsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'nebraskacsn':
            return 'State Licensure RN  & a degree in Nursing \n Educator Credential:Special Services Standard School Nurse Certificate';
        case 'nevadacsn':
            return 'State Licensure:RN License \n Educator Credential: School Nurse License \n Note: RN w/o ed cert CANwork if pupil population is <5,000 & nurse is working towards the requirements to become a school nurse. See: NAC 391.307';
        case 'new hampshirecsn':
            return 'State Licensure: RN  & Degree in Nursing \n Educator Credential: School Nurse Certification (Level I,II or III)';
        case 'new jerseycsn':
            return 'State Licensure: RN  \n Educator Credential: Standard Educational Services Certificate with School Nurse Endorsement';
        case 'new mexicocsn':
            return 'State Licensure: RN  \n Educator Credential: School Nurse Certificate';
        case 'new yorkcsn':
            return 'State Licensure: RN  \n Educator Credential: School Nurse Teacher';
        case 'north carolinacsn':
            return 'State Licensure: RN & Bachelors Degree in Nursing \n No educator credential needed';
        case 'north dakotacsn':
            return 'State Licensure: RN \n Educator Credential: Certificate of Completion for School Health Technician issued by Superindentdent of Public Instruction';
        case 'ohiocsn':
            return 'State Licensure: RN \n Educator Credential: Pupil Service License with School Nurse Endorsement or Registration with ODE';
        case 'oklahomacsn':
            return 'State Licensure: RN License & Bachelors Degree in Nursing \n Educator Credential: Standard Teaching Credential with School Nurse Endorsement';
        case 'oregoncsn':
            return 'State Licensure: RN (and degree transcripts) \n Educator Credential: School Nurse Certificate';
        case 'pennslyvaniacsn':
            return 'State Licensure: RN and Bachelors Degree in Nursing \n Educator Credential: School Nurse Credential';
        case 'rhode islandcsn':
            return 'State Licensure: RN \n Educator Credential: All Grades School Nurse Certificate \n Note: There is a teaching credential, but that is only needed if teaching health classes, or to be listed as Teacher of Record';
        case 'south carolinacsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'south dakotacsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'tennesseecsn':
            return 'State Licensure: RN (or APRN) \n No educator credential needed';
        case 'texascsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'utahcsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'vermontcsn':
            return 'State Licensure: RN & Degree in Nursing \n Educator License: School Nurse OR Associate School Nurse Endorsement';
        case 'virginiacsn':
            return 'State Licensure: RN \n No educator credential needed';
        case 'washingtoncsn':
            return 'State Licensure: RN & Bachelors Degree in Nursing \n Educator Credential: Educational Staff Associate - School Nurse';
        case 'west virginiacsn':
            return 'State Licensure: RN & Bachelors in Nursing \n Educator Credential: Professional Student Suport Certificate - School Nurse';
        case 'wisconsincsn':
            return 'State Licensure: RN \n Educator Credential: DPI School Nurse Credential \n Note: School Nurse credential not required See: Wis. Stat Chp 441 & Wis. Admin. Code Pl 34.060';
        case 'wyomingcsn':
            return 'State Licensure: RN \n No educator credential needed';
    //bcba 
        case 'alabamabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'alaskabcba':
            return 'Certification: BCBA';
        case 'arizonabcba':
            return 'Certification: BCBA \n State Licensure; Behavior Analyst License';
        case 'arkansasbcba':
            return 'Certification: BCBA';
        case 'californiabcba':
            return 'Certification: BCBA';
        case 'coloradobcba':
            return 'Certiication: BCBA';
        case 'connecticutbcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'delawarebcba':
            return 'Certification: BCBA';
        case 'dcbcba':
            return 'Certification: BCBA';
        case 'floridabcba':
            return 'Certification: BCBA';
        case 'georgiabcba':
            return 'certification: BCBA';
        case 'hawaiibcba':
            return 'Certification: BCBA';
        case 'idahobcba':
            return 'Certification: BCBA';
        case 'illinoisbcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'indianabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'iowabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License \n Educator Credential: Statement of Professional Recognition issued by BOEE';
        case 'kansasbcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'kentuckybcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'louisianabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License \n Educator Credential: Ancillary Behavior Analyst Certificate';
        case 'mainebcba':
            return 'Certification: BCBA';
        case 'marylandbcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'massachusettsbcba':
            return 'Certification: BCBA \n State Licensure: Applied Behavior Analyst License';
        case 'michiganbcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'minnesotabcba':
            return 'Certification: BCBA';
        case 'mississippibcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'missouribcba':
            return 'Certification: BCBA';
        case 'montanabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'nebraskabcba':
            return 'Certification: BCBA \nState Licensure: Behavior Analyst License';
        case 'nevadabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'new hampshirebcba':
            return 'Certification: BCBA';
        case 'newe jerseybcba':
            return 'Certification: BCBA \n State Licensure: Licensed Applied Behavior Analyst';
        case 'new mexicobcba':
            return 'Certification: BCBA';
        case 'new yorkbcba':
            return 'Certification: BCBA \n State Licensure: Licensed Applied Behavior Analyst';
        case 'north carolinabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'north dakotabcba':
            return 'Certification: BCBA \n State Licensure: Licensed Behavior Analyst';
        case 'ohiobcba':
            return 'Certification: BCBA \n State Licensure:Certified Behavior Analyst Certificate';
        case 'oklahomabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'oregonbcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'pennslyvaniabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'rhode islandbcba':
            return 'Certification: BCBA \n State Licensure: Applied Behavior Analyst License';
        case 'south carolinabcba':
            return 'Certification: BCBA';
        case 'south dakotabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'tennesseebcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'texasbcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'utahbcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'vermontbcba':
            return 'Certification: BCBA \n State Licensure: Applied Behavior Analyst License';
        case 'virginiabcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'washingtonbcba':
            return 'Certification: BCBA \n State Licensure:Behavior Analyst License \n Educator Credential: Educational Staff Associate with School Behavior Analyst Endorsement \n Note: So long as students the contractor is supporting doesnt have behavior analyst services on IEP no ESA is required';
        case 'west virginiabcba':
            return 'Certification: BCBA';
        case 'wisconsinbcba':
            return 'Certification: BCBA \n State Licensure: Behavior Analyst License';
        case 'wyomingbcba':
            return 'Certification: BCBA \n state Licensure: Behavior Analyst License';
  //behavior specalist 
        //behavior specialist being deprecated due to vaugeness & growth in other disciplines (BCBA, RBT etc)
            
    //school psych
        case 'alabamapsych':
            return 'Class A or AA School Psychologist Certificate';
        case 'alaskapsych':
            return 'Special Services Certificate (Type C) with School Psychology Endorsement';
        case 'arizonapsych':
            return 'Standard School Psychologist Certificate';
        case 'arkansaspsych':
            return 'School Psychologist Specialist Certificate';
        case 'californiapsych':
            return 'Pupil Personnel Services Credential with School Psychology Endorsement';
        case 'coloradopsych':
            return 'Special Service Provider with School Psychology Endorsement';
        case 'connecticutpsych':
            return 'Special Services Certificate with School Psychologist Endorsement';
        case 'delawarepsych':
            return 'School Psychologist Certficiate';
        case 'dcpsych':
            return 'School Service Provider Credential with School Psychologist Endorsement';
        case 'floridapsych':
            return 'Professional Certificate in School Psychology';
        case 'georgiapsych':
            return 'School Psychology Certificate';
        case 'hawaiipsych':
            return 'HI does not offer licensure or certification of School Psychologists. Preferred credentials are:\n -NASP Certification \n-Licensure/Certification from another state';
        case 'idahopsych':
            return 'Pupil Service Staff Certificate with School Psychologist Endorsement';
        case 'illinoispsych':
            return 'Professional Educator License with School Psychologist Endorsement';
        case 'indianapsych':
            return 'School Psychologist Credential';
        case 'iowapsych':
            return 'Professional Service License with School Psychologist Endorsement';
        case 'kansaspsych':
            return 'School Specialist License with School Psychologist Endorsement';
        case 'kentuckypsych':
            return 'Teaching Certificate with School Psychologist Endorsement';
        case 'louisianapsych':
            return 'Standard/Provisional School Psychologist Certificate (Level A or B)';
        case 'mainepsych':
            return 'School Psychologist Certificate';
        case 'marylandpsych':
            return 'School Psychologist Credential';
        case 'massachusettspsych':
            return 'Professional Support Personnel License';
        case 'michiganpsych':
            return 'School PSychologist Certificate';
        case 'minnesotapsych':
            return 'School PSychologist Credential (Tier 2, 3 or 4)';
        case 'mississippipsych':
            return 'School Psychologist Educator License';
        case 'missouripsych':
            return 'Student Services Certificate for School Psychologist or Student Services for School Psychological Examiner \n Note: Examiner focuses more on testing & assessments. Psych is ableto offer wider range of services';
        case 'montanapsych':
            return 'Class 6 - Specalist License for School Psychologist';
        case 'nebraskapsych':
            return 'Teaching Credential with School Psychologist Endorsement';
        case 'nevadapsych':
            return 'Standard Teaching Certificate with School Psychologist Endorsement';
        case 'new hampshirepsych':
            return 'School Psychologist Crednetial or Spcialist Assessment of Intellectual Functioning (SAIF) \n Note: SAIFs roles are limited to testing for intellectual/cognitive function or achievements, but not behavioral';
        case 'new jerseypsych':
            return 'Standard Educational Services Certificate with School Psychologist Endorsement \n Emergency Cert available';
        case 'new mexicopsych':
            return 'Instructional Support Provider (School Psychologist License)';
        case 'new yorkpsych':
            return 'Pupil Personnel Service Credential';
        case 'north carolinapsych':
            return 'School Psychologist License (Special Service Personnel)';
        case 'north daktapsych':
            return 'School Psychology License (from Educational Standards & Practices Board) AND \n School Psychology License from Department of Public Instruction (DPI)';
        case 'ohiopsych':
            return 'Pupil Service License with Psychology Endorsement \n Note: Eff. 12/2024 ODE will no longer license School Psychologists. Instead, licenses will be transferred to the Board of Psychology.';
        case 'oklahomapsych':
            return 'School Psychologist Credential';
        case 'oregonpsych':
            return 'School Psychologist Credential';
        case 'pennslyvaniapsych':
            return 'Education Specialist Certification - School Psychologist';
        case 'rhode islandpsych':
            return 'Related Services Providers - School Psychologist';
        case 'south carolinapsych':
            return 'School Psychologist License (I-III)';
        case 'south dakotapsych':
            return 'Education Specialist Certificate in School Psychology \n Note: A School Psychological Examiner Certificate exists (that role is similar to an Ed Diag';
        case 'tennesseepsych':
            return 'School Services Personnel License with School Psychologist Endorsement';
        case 'texaspsych':
            return 'State Licensure: Licensed Specialist in School Psychology (LSSP) or Associate School Psychologist';
        case 'utahpsych':
            return 'Teaching License with School Psychologist Concentration';
        case 'vermontpsych':
            return 'Teaching License with School Psychologist Endorsement';
        case 'virginiapsych':
            return 'Pupil Personnel ServicesL icense with School Psychologist Endorsement';
        case 'washingtonpsych':
            return 'Educational Staff Associate Certificate with School Psychologist Endorsement';
        case 'west virginiapsych':
            return 'Professional Student Support - School Psychologist Certificate';
        case 'wisconsinpsych':
            return 'Pupil Service License - School Psychology Endorsement';
        case 'wyomingpsych':
            return 'Educator License with Professional Services Endoesement for School Psychologist';
       

            
    //school counselor
        case 'alabamaschool counselor':
            return 'Class A or AA School Counselor credential';
        case 'alaskaschool counselor':
            return 'Special Services Certificate (Type C) with School Counseling Endorsement';
        case 'arizonaschool counselor':
            return 'Standard School Counselor Certificate';
        case 'arkansasschool counselor':
            return 'Guidance & School Counseling Educator Credential';
        case 'californiaschool counselor':
            return 'Pupil Personnel Services Credential with School Counseling Endorsement';
        case 'coloradoschool counselor':
            return 'Special Service Provider License with School Counselor Endorsement';
        case 'connecticutschool counselor':
            return 'Special Services Certificate with School Counselor Endorsement';
        case 'dealwareschool counselor':
            return 'Elementary/Secondary School Counselor Educator Credential';
        case 'dcschool counselor':
            return 'School Service Provider Credential with School Counselor Endorsement';
        case 'floridaschool counselor':
            return 'Professional Certificate in Guidance & Counseling';
        case 'georgiaschool counselor':
            return 'Professional Certificate in School Counseling';
        case 'hawaiischool counselor':
            return 'Educator Credential with School Counselor Endorsement';
        case 'idahoschool counselor':
            return 'Pupil Service Staff Certificate with School Counselor Endorsement';
        case 'illinoisschool counselor':
            return 'Professional Educator License with School Counselor Endorsement';
        case 'indianaschool counselor':
            return 'School Counselor Educator Credential';
        case 'iowaschool counselor':
            return 'Professional Service License with School Counselor Endorsement';
        case 'kansasschool counselor':
            return 'School Specialist License with School Counseling Endorsement';
        case 'kentuckyschool counselor':
            return 'School Counselor Certification';
        case 'louisianaschool counselor':
            return 'Note: IF LPC then: State Licensure: Licensed Professional Counselor & Educator Credential: Provisional Mental Health Profesisonal Counselor Certificate \n Educator Credential (non-LPC): Ancillary Counselor Certificate';
        case 'maineschool counselor':
            return 'School Counselor Certificate';
        case 'marylandschool counselor':
            return 'School Counselor Credential'
        case 'massachusettsschool counselor':
            return 'Academic: Professional Support Personnel License';
        case 'michiganschool counselor':
            return 'School Counselor License OR Teaching Certificate with School Counselor Endorsement';
        case 'minnesotaschool counselor':
            return 'School Counselor License (Tier 2,3 or 4)';
        case 'mississippischool counselor':
            return 'Educator Certificate with Guidance & Counseling Endorsement';
        case 'missourischool counselor':
            return 'Student Services Certificate for School Counselor';
        case 'montanaschool counselor':
            return 'Class 6 Specialist License for School Counselor';
        case 'nebraskaschool counselor':
            return 'Teaching Crednetial with School Counselor Endorsement';
        case 'nevadaschool counselor':
            return 'Teaching Certificate with School Counselor Endorsement';
        case 'new hampshireschool counselor':
            return 'School Counseling Educator Credential';
        case 'new jerseyschool counselor':
            return 'Educational Services Certification with School Counselor Endorsement';
        case 'new mexicoschool counselor':
            return 'PED License for Instructional Support Provider (School Counselor)';
        case 'new yorkschool counselor':
            return 'Pupil Personnel Service Credential with School Counselor Endorsement';
        case 'north carolinaschool counselor':
            return 'Special Service Personnel Certificate with School Counselor Endorsment';
        case 'north dakotaschool counselor':
            return 'School Counselor License from Education Standards & Practices Board & School Counselor Credential from DPI';
        case 'ohioschool counselor':
            return 'Pupil Service License with School Counseling Endorsement';
        case 'oklahomaschool counselor':
            return 'School Counselor Educator Credential';
        case 'oregonschool counselor':
            return 'School Counselor Educator Certificate';
        case 'pennslyvaniaschool counselor':
            return 'Educuational Specialist - Elementary/Secondary School Counselor';
        case 'rhode islandschool counselor':
            return 'Related Service Providers - School Counselor Certificate';
        case 'south carolinaschool counselor':
            return 'See Guidance Counselor';
        case 'south dakotaschool counselor':
            return 'Education Specialist Certificate - School Counselor';
        case 'tennesseeschool counselor':
            return 'School Services Personnel License with School Counselor Endorsement';
        case 'texasschool counselor':
            return 'Can be a Licensed Profesisonal Counselor (which requires State License as LPC only), or Any of the following TEA Certificates: \n Counselor \nSchool Counselor (EC-12) \n Special Education Counselor \nVioational Counselor';
        case 'utahschool counselor':
            return 'Student Support License with School Counseling Concentration';
        case 'vermontschool counselor':
            return 'Teaching License with School Counselor Endorsement';
        case 'virginiaschool counselor':
            return 'Pupil Personnel Services License with School Counselor Endorsement \n Note: Districts can contract w/ personnel to provide: Psych, Social Work, or Counseling services IF they have experience wit adolescents, or can get a provisional license while working towards full DOE license';
        case 'washingtonschool counselor':
            return 'Educational Staff Associate Certificate with School Counselor Endorsement';
        case 'west virginiaschool counselor':
            return 'Professional Student Support - School Counselor Certificate';
        case 'wisconsinschool counselor':
            return 'Pupil Service License with School Counselor Endorsement';
        case 'wyomingschool counselor':
            return 'Educator License with Personnal Services Endorsement in School Counseling';
            
    //school sw
        case 'arizonaschool sw':
            return 'Note: Educator credential is optional, but may be required by the client. \n Educator Credential: Professional Non-Teaching Credential - School Social Work (PreK-12)';
        case 'californiaschool sw':
            return 'Pupil Personnel Services License with School Work Endorsement';
        case 'coloradoschool sw':
            return 'Special Service Provider with School Social Work Endorsement';
        case 'connecticutschool sw':
            return 'Special Services Certificate with School Social Work Endorsement';
        case 'delawareschool sw':
            return 'School Social Worker Certificate';
        case 'dcschool sw':
            return 'School Service Provider with School Work Endorsement Credential';
        case 'georgiaschool sw':
            return 'School Social Work Certificate';
        case 'idahoschool sw':
            return 'Pupil Service Staff Certificate with School Social Worker Endorsement';
        case 'illinoisschool sw':
            return 'Professional Educator License with School Social Worker Endorsement';
        case 'indianaschool sw':
            return 'School Social Worker Credential';
        case 'iowaschool sw':
            return 'Statement of Professional Recognition';
        case 'kentuckyschool sw':
            return 'Professional Certificate for School Social Worker';
        case 'louisianaschool sw':
            return 'State Licensure: Licensed Masters Social Worker (MSW) or Licensed Clinical Social Worker (LCSW) \n Educator Credential: Ancillary Social Worker';
        case 'marylandschool sw':
            return 'School Social Worker Credential';
        case 'massachusettsschool sw':
            return 'Professional Support Personnel License with School Social Work Endorsement';
        case 'michiganschool sw':
            return 'School Social Work Certificate or SSW-310 Form Autorization for School Social Work';
        case 'minnesotaschool sw':
            return 'School Social Worker License (Tier 3 or 4)';
        case 'nevadaschool sw':
            return 'State Licensure: Social Work License (issued by Board of Examiners) \n Educator Credential: Teaching Credential with School Social Work Endorsement';
        case 'new hampshireschool sw':
            return 'School Social Worker Certificate';
        case 'new jerseyschool sw':
            return 'Standard Educaitonal Services Certification with School Social Worker Endorsement';
        case 'new mexicoschool sw':
            return 'PED Licensure for Instructional Support (School Social Worker)';
        case 'new yorkschool sw':
            return 'Pupil Personnel Services Credential with School Social Worker Endorsement';
        case 'north carolinaschool sw':
            return 'Special Service Personnel Certificate with School Social Work Endorsement';
        case 'ohioschool sw':
            return 'State Licensure: Independent Social Worker or Social Worker \n Educator Credential: Pupil Service License or ODE Registration';
        case 'oklahomaschool sw':
            return 'State Licensure: Masters Social Worker License or Clinical Social Worker';
        case 'oregonschool sw':
            return 'School Social Worker Educator Credential';
        case 'pennslyvaniaschool sw':
            return ' Educational Specialist Certification in School Social Worker';
        case 'rhode islandschool sw':
            return 'State Licensure: Clinical Social Worker License \n Educator Credential: Related Service Providers - School Social Worker';
        case 'south carolinaschool sw':
            return 'State Licensure: Social Worker';
        case 'tennesseeschool sw':
            return 'School Services Personnel License with School Social Worker Endorsement';
        case 'texasschool sw':
            return 'State Licensure: Social Work License';
        case 'utahschool sw':
            return 'Teaching Credential with School Social Worker Concenctration \n Note: An individual may hold a school social work assignment in an LEA w/o school social worker license area of concrentation';
        case 'vermontschool sw':
            return 'Professional Teaching License with School Social Worker Endorsement';
        case 'virginiaschool sw':
            return 'Pupil Personnel Service License with School Social Work Endorsement \n Note: Can work under provisional license DOE while working towards full licensure or can work with a clinical license & adolescent experience';
        case 'washingtonschool sw':
            return 'Educational Staff Associate Certificate with School Social Worker Endorsement';
        case 'west virginiaschool sw':
            return 'State Licensure: Licensed Social Work \nLicensed Graduate Social Worker \nLicensed Certified Social Worker \nLicensed Independent Clinical Social Worker';
        case 'wisconsinschool sw':
            return 'Pupil Service License with School Social Worker Endorsement';
        case 'wyomingschool sw':
            return 'Educator License with Professional Services Endorsement for School Social Worker';
        
            
    //lmft 
        case 'connecticutlmft':
            return 'State Licensure: LMFT \n Educator License: Special Services Certificate with School Marriage & Family Therapist';
        case 'iowalmft':
            return 'State Licensure: LMFT \n Educator License: Mental Health Professional - Statement of Professional Recognition';
        case 'louisianalmft':
            return 'State Licensure: LMFT \n Educator License: Provisional Mental Health Professional Counselor Certificate';
        case 'nevadalmft':
            return 'State Licensure: LMFT \n Educator License: Teaching Credential with Mental Health Professional';
        case 'new mexicolmft':
            return 'State Licensure: LMFT \n Educator License: PED Licensure for Instructional Support Provider (Marriage & Family Therapist)';
        case 'ohiolmft':
            return 'State Licensure: LMFT'; 
      default:
        return 'Discipline doesn\'t exist';
            
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
