const data = [[
]]
const fields = [];

function createCard(fields, data) {
    //iterate through every company
    for (let i = 0; i < data.length; i++) {
        const company = data[i];   
        //create main container
        const orgContainer = document.createElement("div");
        document.body.appendChild(orgContainer);
        orgContainer.classList.add("organization-container");  
        
        //create header for company name
        const orgNameContainer = document.createElement("div");
        orgNameContainer.classList.add("org-name");
        const orgNameText = document.createElement("h1");
        orgNameText.innerHTML = company[1]
        orgContainer.appendChild(orgNameContainer);
        orgNameContainer.appendChild(orgNameText);

        //create data container div
        const dataContainer = document.createElement("div");
        dataContainer.classList.add("data-container");
        orgContainer.appendChild(dataContainer);

        //col1 creation
        const col1 = document.createElement("div");
        col1.classList.add("col1");
        dataContainer.appendChild(col1);

        //create address
        const addressContainer = document.createElement("div");
        addressContainer.classList.add("address");
        const field2 = document.createElement("p");
        field2.innerHTML = fields[2];
        const info2 = document.createElement("p");
        info2.innerHTML = company[2]
        col1.appendChild(addressContainer);
        addressContainer.appendChild(field2);
        addressContainer.appendChild(info2);

        //registration
        const registrationContainer = document.createElement("div");
        col1.appendChild(registrationContainer);
        registrationContainer.classList.add("registration");
        const field3 = document.createElement("p");
        field3.innerHTML = fields[3];
        const info3 = document.createElement("h1");
        info3.innerHTML = company[3];
        registrationContainer.appendChild(field3);
        registrationContainer.appendChild(info3);

        //business type
        const businessTypeContainer = document.createElement("div");
        businessTypeContainer.classList.add("business-type");
        col1.appendChild(businessTypeContainer);
        const field4 = document.createElement("p");
        field4.innerHTML = fields[4];
        const info4 = document.createElement("p");
        info4.innerHTML = company[4];
        businessTypeContainer.appendChild(field4);
        businessTypeContainer.appendChild(info4);

        //information container
        const informationContainer = document.createElement("div");
        informationContainer.classList.add("information-container");
        col1.appendChild(informationContainer);
        //organization information
        for (let index = 5; index < 7; index++) {
            const category = fields[index];
            const answer = company[index];
            const orgInformation = document.createElement("div");
            orgInformation.classList.add("organization-information");
            informationContainer.appendChild(orgInformation);
            const field = document.createElement("p");
            field.innerHTML = category;
            const info = document.createElement("p");
            info.innerHTML = answer;
            orgInformation.appendChild(field);
            orgInformation.appendChild(info);

        }
        //membership information
        const membershipContainer = document.createElement("div");
        col1.appendChild(membershipContainer);
        membershipContainer.classList.add("membership-information-container");
        const membershipHeader = document.createElement("h1");
        membershipHeader.innerHTML = "Membership Information";
        membershipContainer.appendChild(membershipHeader);
        for (let index = 8; index < 11 ; index++) {
            const category = fields[index];
            const answer = company[index]
            const memberInformation = document.createElement("div");
            memberInformation.classList.add("member-information");
            membershipContainer.appendChild(memberInformation);
            const field = document.createElement("p");
            field.innerHTML = category;
            const info = document.createElement("p");
            info.innerHTML = answer;
            memberInformation.appendChild(field);
            memberInformation.appendChild(info);
        }
        //contact information
        const contactContainer = document.createElement("div");
        col1.appendChild(contactContainer);
        contactContainer.classList.add("membership-information-container");
        const contactHeader = document.createElement("h1");
        contactHeader.innerHTML = "Contact Information";
        contactContainer.appendChild(contactHeader);
        for (let index = 12; index < 20 ; index++) {
            const category = fields[index];
            const answer = company[index]
            const memberInformation = document.createElement("div");
            memberInformation.classList.add("member-information");
            contactContainer.appendChild(memberInformation);
            const field = document.createElement("p");
            field.innerHTML = category;
            const info = document.createElement("p");
            info.innerHTML = answer;
            memberInformation.appendChild(field);
            memberInformation.appendChild(info);
        }

        //col2 
        const col2 = document.createElement("div");
        col2.classList.add("col2");
        dataContainer.appendChild(col2);

        //list of plans
        const plansContainer = document.createElement("div");
        plansContainer.classList.add("col2-information-container");
        col2.appendChild(plansContainer);

        const plansHeader = document.createElement("h1");
        plansHeader.innerHTML = "List of Plans";
        plansContainer.appendChild(plansHeader);

        for (let index = 20; index < 21; index++) {
            const category = fields[index];
            const answer = company[index];
            const col2info = document.createElement("div");
            col2info.classList.add("col2-information");
            plansContainer.appendChild(col2info);
            const field = document.createElement("p");
            field.innerHTML = category;
            col2info.appendChild(field);
            const info = document.createElement("p");
            info.innerHTML = answer;
            col2info.appendChild(info);
        }

        //partnership
        const partnerContainer = document.createElement("div");
        partnerContainer.classList.add("col2-information-container");
        col2.appendChild(partnerContainer);

        const partnerHeader = document.createElement("h1");
        partnerHeader.innerHTML = "Aboitiz Foundation Partnership";
        partnerContainer.appendChild(partnerHeader);

        const yearContainer = document.createElement("div");
        yearContainer.classList.add("col2-information");
        partnerContainer.appendChild(yearContainer);
        const yearHeader = document.createElement("p");
        yearHeader.innerHTML = fields[22];
        yearContainer.appendChild(yearHeader);
        const yearValue = document.createElement("p");
        yearValue.innerHTML = company[22];
        yearContainer.appendChild(yearValue);

        for (let index = 23; index < 25; index++) {
            const category = fields[index];
            const answer = company[index];
            //creates list for partnership
            const answer_split = answer.split(",");
            console.log(answer_split);
            const col2info = document.createElement("div");
            col2info.classList.add("col2-information");
            partnerContainer.appendChild(col2info);
            const field = document.createElement("p");
            field.innerHTML = category;
            col2info.appendChild(field);
            const info = document.createElement("ul");
            col2info.appendChild(info);
            for (let index = 0; index < answer_split.length; index++) {
                const element = answer_split[index];
                const list_item = document.createElement("li");
                list_item.innerHTML = element;
                info.appendChild(list_item);
            }
            // info.innerHTML = answer;
            col2info.appendChild(info);
        }

        //col3
        const col3 = document.createElement("div");
        col3.classList.add("col3");
        dataContainer.appendChild(col3);

        const col3Header = document.createElement("h1");
        col3Header.innerHTML ="Financial Status";
        col3.appendChild(col3Header);

        //insert graph script here
        const graphContainer = document.createElement("div");
        graphContainer.classList.add("graph");
        col3.appendChild(graphContainer);

        //finance containers
        const financedataContainer = document.createElement("div");
        financedataContainer.classList.add("finance-data-container");
        col3.appendChild(financedataContainer);

        const col3info = document.createElement("div");
        col3info.classList.add("financials-container");
        financedataContainer.appendChild(col3info);

        for (let index = 25; index != 28; index++) {
            const category = fields[index];
            const answer = company[index];
            const assetsContainer = document.createElement("div");
            assetsContainer.classList.add("assets");
            col3info.appendChild(assetsContainer);
            const field = document.createElement("p");
            field.innerHTML = category;
            assetsContainer.appendChild(field);
            const info = document.createElement("p");
            info.innerHTML = answer;
            assetsContainer.appendChild(info);
        }

        const col3info2 = document.createElement("div");
        col3info2.classList.add("financials-container");
        financedataContainer.appendChild(col3info2);
        for (let index = 28; index != 31; index++) {
            const category = fields[index];
            const answer = company[index];

            const assetsContainer = document.createElement("div");
            assetsContainer.classList.add("assets");
            col3info2.appendChild(assetsContainer);

            const field = document.createElement("p");
            field.innerHTML = category;
            assetsContainer.appendChild(field);
            const info = document.createElement("p");
            info.innerHTML = answer;
            assetsContainer.appendChild(info);
        }

    }
}

createCard(fields,data)