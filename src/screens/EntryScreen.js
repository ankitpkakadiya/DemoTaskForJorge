import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import pageOne from './Drawer/page1';
import pageTwo from './Drawer/page2';
import pageThree from './Drawer/page3';
import pageFour from './Drawer/page4';

const Drawer = createDrawerNavigator();

const EntryScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="pageone" component={pageOne} />
    <Drawer.Screen name="pageTwo" component={pageTwo} />
    <Drawer.Screen name="pageThree" component={pageThree} />
    <Drawer.Screen name="pageFour" component={pageFour} />
  </Drawer.Navigator>
);

export default EntryScreen;
