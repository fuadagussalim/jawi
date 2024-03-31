import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export default function TabMenu({options}) {
    

    interface MenuOption {
        key: "",
        title: "",
        description: "",
        image: ""
    }

 
    const tabMenus: MenuOption[]=options;
      

      
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
      {tabMenus.map((menu: MenuOption) => (
          <Tab key={menu.key} title={menu.title}>
            <Card>
              <CardBody>
                <h3>{menu.title}</h3>
                <p>{menu.description}</p>
              </CardBody>
            </Card>
          </Tab>
        ))}
     
        
      </Tabs>
    </div>  
  );
}
