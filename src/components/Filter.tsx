import React, { useMemo, useState } from 'react';
import { Modal, Input, Button, FormControl } from 'native-base';
import { Feather as Icon } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { MotiPressable } from 'moti/interactions';

const { height: HEIGHT } = Dimensions.get('screen');

export default function Filter() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <MotiPressable
                style={{
                    width: 60,
                    height: 60,
                    // position: 'absolute',
                    // top: (HEIGHT * 2) / 3,
                    // right: 20,
                    borderRadius: 100,
                    backgroundColor: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                }}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}
                animate={useMemo(
                    () =>
                        ({ pressed }) => {
                            'worklet';

                            return {
                                scale: pressed ? 0.7 : 1,
                            };
                        },
                    []
                )}
            >
                <Icon
                    name="sliders"
                    color="white"
                    size={25}
                    style={{ transform: [{ rotateZ: '90deg' }] }}
                />
            </MotiPressable>

            <Modal
                isOpen={modalVisible}
                onClose={() => setModalVisible(false)}
                avoidKeyboard
                justifyContent="center"
                bottom="4"
                size="lg"
            >
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Forgot Password?</Modal.Header>
                    <Modal.Body>
                        Enter email address and we'll send a link to reset your
                        password.
                        <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            flex="1"
                            onPress={() => {
                                setModalVisible(false);
                            }}
                        >
                            Proceed
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
}
