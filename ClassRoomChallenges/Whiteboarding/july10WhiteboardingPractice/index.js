let monsters = {
    SlimyTheMonster: {
    traits: [`covered in slime`, `gentle soul`], 
    size: `Pretty Big`, 
    description: `Slimy is misunderstood.`, 
    dangerous: false, 
    defeatMethods: 
    {sword: `slashing damage`, 
    fire: `susceptible to fireball attacks`, 
    nameCalling: `Insult him for cruel damage.`}
    },		
    HairyTheMonster: {
    traits: [`fuzzy`, `howling`], 
    size: `As big as a goldendoodle`, 
    description: `Whose a good boy? Hairy is!`, 
    dangerous: false, 
    defeatMethods: {car: `Hairy runs into traffic`, 
    fire: `fur is flammable`, 
    leaveOutTrash: `He will eat disgusting things to cause internal harm.`}
    },
    StinkyTheMonster: {
    traits: [`putrid smell`, `embodiment of evil`], 
    size: `nightmarishly huge`, 
    description: `Stinky is silent and deadly.`, 
    dangerous: true, 
    defeatMethods: 
    {prayer: `fight evil with good`, 
    water: `incapacitate the stink with a bath`, 
    quitHittingYourself: `Since he is an otherworldly strong, he can hurt himself with his own fists.`}}
    }
    console.log(monsters);
    