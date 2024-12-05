
 const speciesDrop = document.getElementById("Species") //Identifies list in dropdown "Species" and assigns to constant.
 function selectSpecies(event) {
   showFromGroup("speciesSummary", event.target.value+"Summary");
   showFromGroup("racialFeats", event.target.value+"Feats");
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
 }



document.getElementById("humanFeat1").addEventListener("change", selectfeat1); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("humanFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("humanFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("elfFeat1").addEventListener("change", selectfeat1) //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("elfFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("elfFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant. 

document.getElementById("dwarfFeat1").addEventListener("change", selectfeat1); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("dwarfFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("dwarfFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("titanFeat1").addEventListener("change", selectfeat1); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("titanFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("titanFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("snakeFeat1").addEventListener("change", selectfeat1); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("snakeFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("snakeFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("dergFeat1").addEventListener("change", selectfeat1); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("dergFeat2").addEventListener("change", selectfeat2); //Identifies list in dropdown "Species" and assigns to constant.

document.getElementById("dergFeat3").addEventListener("change", selectfeat3); //Identifies list in dropdown "Species" and assigns to constant.

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