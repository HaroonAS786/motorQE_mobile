import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

const BottomSheet = ({
  isVisible,
  toggleModal,
  children,
  customStyle,
  hasBackdrop,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      animationIn={'bounceInUp'}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}>
      <View
        style={[
          {
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          customStyle,
        ]}>
        {children}
      </View>
    </Modal>
  );
};

export default BottomSheet;
