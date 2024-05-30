import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {BACK} from '../../assets/Images/Index';

const ProductDetails = ({route, navigation}) => {
  const {product} = route?.params || {};

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={BACK}
              style={styles.headerImg}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Product Details</Text>
        </View>
        <Image source={{uri: product?.image}} style={styles.productImage} />
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product?.title}</Text>
          <Text style={styles.productDescription}>{product?.description}</Text>
          <Text style={styles.productPrice}>
            Rating: {product?.rating?.rate}
          </Text>
          <Text style={styles.productPrice}>${product?.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.addToCart} onPress={null}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  header: {
    marginTop: 10,
    padding: 16,
    backgroundColor: '#5956E9',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
  },
  headerImg: {
    width: 30,
    height: 30,
    marginRight: 60,
  },
  headerText: {
    fontSize: 24,
    color: '#ecf0f1',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 16,
    marginBottom: 16,
    marginTop: 20,
  },
  detailsContainer: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 16,
    lineHeight: 20,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 16,
  },
  addToCart: {
    backgroundColor: '#5956E9',
    marginHorizontal: 16,
    paddingVertical: 12,
    marginTop: 15,
    borderRadius: 8,
    width: 314,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  addToCartText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default ProductDetails;
