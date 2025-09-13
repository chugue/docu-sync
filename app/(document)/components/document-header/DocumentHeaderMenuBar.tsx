"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/shared/components/ui/navigation-menu";
import MenuBarFile from "./menu-bar-items/MenuBarFile";
import MenuBarFormat from "./menu-bar-items/MenuBarFormat";
import MenuBarInsert from "./menu-bar-items/MenuBarInsert";
import MenuBarModify from "./menu-bar-items/MenuBarModify";
import MenuBarView from "./menu-bar-items/MenuBarView";

const DocumentHeaderMenuBar = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <MenuBarFile />
        <MenuBarModify />
        <MenuBarView />
        <MenuBarInsert />
        <MenuBarFormat />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DocumentHeaderMenuBar;
