
 const speciesDrop = document.getElementById("Species") //Identifies list in dropdown "Species" and assigns to constant.
 function selectSpecies(event) {
   showFromGroup("speciesSummary", event.target.value+"Summary");
   showFromGroup("racialFeats", event.target.value+"Feats");
   document.getElementById("chosenRace").innerHTML = event.target.value;
 }
speciesDrop.addEventListener("change", selectSpecies); //When values change in speciesDrop, call function selectSpecies.

 function selectfeat1(event) {
   showFromGroup("featSummary1", event.target.value);
 }

 function selectfeat2(event) {
   showFromGroup("featSummary2", event.target.value);
 }

 function selectfeat3(event) {
   showFromGroup("featSummary3", event.target.value);
 }

 function selectjob(event) {
   showFromGroup("jobSummary", event.target.value);
   classHP = chpTable[event.target.value]
   document.getElementById("startHP").innerHTML = 2 * (classHP + endVal)
   document.getElementById("chosenClass").innerHTML = event.target.value;
 }

 function selectEndurance(event) {
   endVal = parseInt(event.target.value)
   document.getElementById("startHP").innerHTML = 2 * (classHP + endVal)
 }
document.getElementById("endurance").addEventListener("change", selectEndurance)
 classHP = 0
 endVal = 0
 chpTable = {
   "Armsmaster": 10,
   "Skirmisher": 8,
   "Seer": 8,
   "Psion": 8,
   "Arcanist": 6,
   "Holy": 6,
   "Druid": 6
}


document.getElementById("HumanFeat1").addEventListener("change", selectfeat1); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("HumanFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("HumanFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("ElfFeat1").addEventListener("change", selectfeat1) //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("ElfFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("ElfFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant. 

document.getElementById("DwarfFeat1").addEventListener("change", selectfeat1); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("DwarfFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("DwarfFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("TitanidFeat1").addEventListener("change", selectfeat1); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("TitanidFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("TitanidFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("ViperkinFeat1").addEventListener("change", selectfeat1); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("ViperkinFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("ViperkinFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("DramaelFeat1").addEventListener("change", selectfeat1); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("DramaelFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("DramaelFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("Job").addEventListener("change", selectjob);


function showFromGroup(groupClass, newValue) {
   const oldElement = document.querySelector("."+groupClass+".shown");
   if (oldElement != null) {
      oldElement.classList.remove("shown");
      oldElement.classList.add("hidden");
}
   const newElement = document.getElementById(newValue)
   newElement.classList.add("shown")
   newElement.classList.remove("hidden")
}




//console.log(event.target.value); //Prints result of event
   //target.value means it only cares about current selection
//Debug Script