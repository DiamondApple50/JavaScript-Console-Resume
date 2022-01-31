let fullname = 'Jason Loring'
console.log('Name: ' + fullname.toUpperCase())
console.log('Carrer: Web Development')
console.log('Description: My favorite color is red.')
console.log('My Interests:')
console.log('Video Games')
console.log('Airsoft')
console.log('Hanging out with friends')
console.log('VR')
console.log('My Previous Experience:  ')
displayPosition('Lowes,', 'CSA,', 'Worked the isles and helped customers make informed decesions on what they need for there project')






let talents = [
    {
        skl: 'HTML',
        bam: false
    },
    {
        skl: 'Css',
        bam: true
    },
    {
        skl: 'JavaScript',
        bam: true
    }
]

console.log('My Skill:')
for (let index = 0; index < talents.length; index++) {
    displaySkill(talents[index].skl, talents[index].bam)
    
}

function displaySkill(skill, bam) {
    if(bam == true ){
        console.log('BAM: ' + skill)
    } else{
        console.log(skill)
    }

    
}

function displayPosition(companyName, jobTitle, description) {
    console.log(companyName, jobTitle, description)
}

