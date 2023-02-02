const defaultFields = [ ]

const fields1 = []
const data1= []

const fields2 = []
const data2= []

const fields3 = []
const data3 = []


function createDashboard(defaultFields,field1,field2,field3,data1,data2,data3) {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add("dashboard-container");
    document.body.appendChild(mainContainer);
    
    const header = document.createElement('div');
    header.classList.add('dashboard-header');
    mainContainer.appendChild(header);

    const header1 = document.createElement('h1');
    const header2 = document.createElement('h2');
    header1.innerHTML = "Dashboard:";
    header.appendChild(header1);

    //data container 
    const dataContainer = document.createElement('div');
    dataContainer.classList.add('data-container');
    mainContainer.appendChild(dataContainer);

    //col1
    const col1 = document.createElement('div');
    col1.classList.add('col1');
    dataContainer.appendChild(col1);

    //part 1
    const part1 = document.createElement('div');
    part1.classList.add('part1');
    col1.appendChild(part1);

    //intro container 
    const introContainer = document.createElement('div');
    introContainer.classList.add('intro-container');
    part1.appendChild(introContainer);

    //intro data
    const members = document.createElement('p');
    members.innerHTML = defaultFields[0];
    introContainer.appendChild(members);

    const num = document.createElement('h1');
    num.innerHTML = defaultFields[1];
    introContainer.appendChild(num);

    for (let index = 2; index < 4 ; index++) {
        const element = defaultFields[index];
        const data = document.createElement('p');
        data.innerHTML = element;
        introContainer.appendChild(data);
    }

    //stats container
    const statsContainer = document.createElement('div');
    statsContainer.classList.add('stats-container');
    part1.appendChild(statsContainer);

    //stats inputs
    for (let index = 4; index < 7; index++) {
        const element = defaultFields[index];
        const data = document.createElement('p');
        data.innerHTML = element;
        statsContainer.appendChild(data);
    }

    //about
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about');
    col1.appendChild(aboutContainer);

    for (let index = 7; index < 9; index++) {
        const element = defaultFields[index];
        const data = document.createElement('p');
        data.innerHTML = element;
        aboutContainer.appendChild(data);
    }

    //graph 1
    const graph1Container = document.createElement('div');
    graph1Container.className = 'graph-container';
    col1.appendChild(graph1Container);

    const graph1title = document.createElement('h1');
    graph1title.innerHTML = defaultFields[9]
    graph1Container.appendChild(graph1title);

    const graph1 = document.createElement('div');
    graph1.className = 'graph1';
    graph1Container.appendChild(graph1);


    //col2 
    const col2 = document.createElement('div');
    col2.className = 'col2';
    dataContainer.appendChild(col2);

    //info container
    const infoContainer = document.createElement('div');
    infoContainer.className = 'info-container';
    col2.appendChild(infoContainer);

    //data rows
    var dataCounter = 0;
    for (let index = 1; index < 4; index++) {
        const dataRow = document.createElement('div');
        dataRow.className = 'data-row';
        infoContainer.appendChild(dataRow);

        var addend = 3
        for (let index2 = dataCounter; index2 < (dataCounter + addend); index2++) {
            if (index2 === 6) {
                addend += 1;
            }
            const field = fields1[index2];
            const info = data1[index2];
            const cell = document.createElement("div");
            cell.className = "data-cell";
            dataRow.appendChild(cell);
            
            const fieldText = document.createElement('p');
            fieldText.innerHTML = field;
            cell.appendChild(fieldText);

            const infoText = document.createElement('p');
            infoText.innerHTML = info;
            cell.appendChild(infoText);
        }
        dataCounter += 3;
   
    }

    //course container
    const courseContainer = document.createElement('div');
    courseContainer.className = 'course-container';
    col2.appendChild(courseContainer);

    const courseHeader = document.createElement('h1');
    courseHeader.innerHTML = "Capacity Building Training";
    courseContainer.appendChild(courseHeader)

    //courses
    for (let index = 0; index < fields2.length; index++) {
        const course = fields2[index];
        const element = document.createElement("p");
        element.innerHTML = course;
        
        courseContainer.appendChild(element);
        
    }

    //col3
    const col3 = document.createElement("div");
    col3.className = "col3";
    dataContainer.appendChild(col3);

    const graph2Container = document.createElement("div");
    graph2Container.className = "graph-container";
    col3.appendChild(graph2Container);

    const graph2Title = document.createElement("h1");
    graph2Title.innerHTML = fields3[0];
    graph2Container.appendChild(graph2Title);

    //insert graph 2 here
    const graph2 = document.createElement("div");
    graph2.className = "graph1";
    graph2Container.appendChild(graph2);  

    const graph3container = document.createElement("div");
    graph3container.className = "graph-container";
    col3.appendChild(graph3container);

    const graph3Title = document.createElement("h1");
    graph3Title.innerHTML = fields3[2];
    graph3container.appendChild(graph3Title);

    //insert graph 3 here
    const graph3 = document.createElement("div");
    graph3.className = "graph1";
    graph3container.appendChild(graph3); 
}


createDashboard(defaultFields,fields1,fields2,fields3,data1,data2,data3)