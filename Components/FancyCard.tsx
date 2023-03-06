import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://picsum.photos/200',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Sample Text</Text>
          <Text style={styles.cardLabel}>Sample Text</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aut.
          </Text>
          <Text style={styles.cardFooter}>
            12 min away
          </Text>
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
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter:{},
});
