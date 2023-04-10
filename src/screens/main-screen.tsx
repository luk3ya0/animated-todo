import React, {useCallback, useState} from 'react';
import {Icon, VStack, Fab, useColorModeValue} from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import shortid from 'shortid';
import TaskList, {TaskItemData} from "../components/task-list";
import {AntDesign} from '@expo/vector-icons';
import AnimatedColorBox from "../components/animated-color-box";
import Masthead from "../components/masthead";
import Navbar from "../components/navbar";

const initialData = [
  {
    id: shortid.generate(),
    done: false,
    subject: "By movie tickets for Friday"
  },
  {
    id: shortid.generate(),
    done: false,
    subject: "Make a React Native tutorial"
  }
]

export default function MainScreen() {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const handleToggleItem = useCallback((item: TaskItemData) => {
    setData(prevdata => {
      const newData = [...prevdata]
      const index = prevdata.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    })
  }, [])
  
  const handleChangeTaskItemSubject = useCallback((item: TaskItemData, newSubject: string) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        subject: newSubject
      }
      return newData
    })
  }, [])
  
  const handleFinishEditingTaskItem = useCallback((_item: TaskItemData) => {
    setEditingItemId(null)
  }, [])
  
  const handlePressTaskItemLabel = useCallback((item: TaskItemData) => {
    setEditingItemId(item.id)
  }, [])
  
  const handleRemoveItem = useCallback((item: TaskItemData) => {
    setData(prevData => {
      return prevData.filter(i => i != item)
    })
  }, [])
  
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full"
    >
      <Masthead
        title="What's up, Luke"
        image={require('../assets/masthead.png')}
      >
        <Navbar/>
      </Masthead>
      <VStack
        flex={1}
        space={1}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleItem}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onChangeSubject={handleChangeTaskItemSubject}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus"/>}/>}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.3400')}
        onPress={() => {
          const id = shortid.generate()
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ])
          setEditingItemId(id)
        }}
      />
    </AnimatedColorBox>
  );
}
