import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import SearchField from '../components/SearchComponent';

const HomeScreen = ({route, navigation}) => {
  const {productData} = route?.params || {};
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productData);

  useEffect(() => {
    if (searchQuery) {
      const filtered = productData.filter(product =>
        product?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productData);
    }
  }, [searchQuery, productData]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetails', {product: item})}>
      <Image source={{uri: item?.image}} style={styles.productImage} />
      <Text style={styles.productName}>{item?.title}</Text>
      <Text style={styles.productPrice}>${item?.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchField onSearch={setSearchQuery} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Order online</Text>
        <Text style={styles.headerTitle}>collect in store</Text>
      </View>
      {filteredProducts?.length > 0 ? (
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.productsContainer}
        />
      ) : (
        <View style={styles.noItemsContainer}>
          <Text style={styles.noItemsText}>No items found !!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 16,
  },
  header: {
    padding: 20,
    textAlign: 'flex-start',
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 10,
    color: '#000000',
    lineHeight: 39,
  },
  productsContainer: {
    padding: 10,
    marginHorizontal: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    width: 'auto',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    marginBottom: 30,
  },
  productImage: {
    width: 104,
    height: 98,
    borderRadius: 50,
    marginTop: 8,
  },
  productName: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: '#000000',
    paddingHorizontal: 30,
  },
  productPrice: {
    fontSize: 17,
    color: '#5956E9',
    marginTop: 20,
    lineHeight: 20,
    fontWeight: '700',
    paddingVertical: 20,
  },
  noItemsContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  noItemsText: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
  },
});
export default HomeScreen;
