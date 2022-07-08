import React, { useState } from 'react';
import { Box, Card, Pressable, Text } from 'native-base';
import { Agenda } from 'react-native-calendars';

function timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

export default function Calendar() {
    const [items, setItems] = useState({});

    const loadItems = (day: DateData) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!items[strTime]) {
                    items[strTime] = [];

                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(
                                50,
                                Math.floor(Math.random() * 150)
                            ),
                            day: strTime,
                        });
                    }
                }
            }

            const newItems: AgendaSchedule = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };

    const renderItem = (item) => {
        return (
            <Pressable>
                <Box p={2} mt={17} shadow="9" bg="blueGray.100">
                    <Text>{item.name}</Text>
                </Box>
            </Pressable>
        );
    };

    return (
        <>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2022-07-07'}
                renderItem={renderItem}
            />
        </>
    );
}
