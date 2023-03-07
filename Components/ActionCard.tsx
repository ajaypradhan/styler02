import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES21
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            aperiam veniam ea, perferendis culpa rerum doloribus vero atque
            tempore, consectetur impedit accusantium nobis distinctio pariatur
            alias. Officia ratione nemo accusamus.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://www.github.com/ajaypradhan');
            }}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://www.instagram.com/ajay.pradhan02');
            }}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 380,
    height: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#e07c24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical:4,
    fontWeight: '600',
    borderRadius:4
  },
});
