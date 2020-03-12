import React, { useState } from 'react';
import { StyleSheet, Button, View, Text , TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function AppTest() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle} ]);
        setIsAddMode(false);
    }

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        })
    }

    const cancelGoalAdd = () => {
        setIsAddMode(false);
    }

    return (
        <View style={styles.content}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput 
                visible={isAddMode}
                onAddGoal={addGoalHandler}
                onCancel={cancelGoalAdd}
            />
            <FlatList
                keyExtractor={(item, index) => item.id} 
                data={courseGoals} 
                renderItem={itemData => (
                    <GoalItem 
                        id={itemData.item.id} 
                        title={itemData.item.value}
                        onDelete={removeGoalHandler}
                     />
                     )} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 80
    },
    
})
