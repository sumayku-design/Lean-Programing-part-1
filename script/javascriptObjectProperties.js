// Using Bracket Notation
// 'use strict';
/*       
var job = {
	exp = 'las then 2 year',
	skill = 'Web design'
}



display(job.[skill]) // Web design

job['programer'] = 'No designer'
display(job.['programer']) // no designer
*/

// js Property descriptors
 var job = {
 	name: 'Web design',
 	exp: '2 Years'
 };

 console.log(object.getOwnPropertyDescriptor(job, 'name'));