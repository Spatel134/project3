import React from "react";
import { Button, Drawer } from "@material-ui/core";

const MaterialSideNav = () => {
  return (
    <React.Fragment>
      <Button>Button</Button>
      <Drawer
        anchor="left"
        //   open={state[anchor]}
        //   onClose={toggleDrawer(anchor, false)}
      >
        {/* {list()} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        accusamus in beatae voluptatibus deleniti, amet dignissimos magni? Ex
        eveniet aliquid ullam maxime repellendus, impedit sapiente ut
        praesentium, distinctio reprehenderit nulla?
      </Drawer>
    </React.Fragment>
  );
};

export default MaterialSideNav;
