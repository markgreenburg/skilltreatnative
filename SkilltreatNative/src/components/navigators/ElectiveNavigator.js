'use strict';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

/* Required Subcomponents */
import ElectiveList from '../screens/ElectiveList';
import Elective from '../screens/Elective';

/* Define the nested Navigator for this tab */
const ElectiveNavigator = StackNavigator({
    ElectiveList: { screen: ElectiveList },
    Elective: { screen: Elective },
});

export default ElectiveNavigator;