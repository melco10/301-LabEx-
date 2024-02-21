import { SectionList, SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Avatar  } from 'react-native-paper';
import React, {useState} from 'react';




export default function App() {

  const [currentSection , setCurrentSection ] = useState('name');

  const resumeData =  {
    imageUrl: "assets/avatar.JPG",
    name: "Melco Maniel M. Gulbe",
    course: " The Bachelor of Science in Information Technology (BSIT)",
    
    // School
    elemSchool: "Parada Elementary School",
    highSchool: "Parada National High School",
    shSchool: "Our Lady of Lourdes College",
    college: "Global Reciprocal Colleges"
  }

  const onName = () => {
     setCurrentSection('name');
  }

  const onEducation = () =>{
    setCurrentSection('education')
  }

  const onProject1 = () =>{
    setCurrentSection('project1')
  } 
  const onProject2 = () =>{
    setCurrentSection('project2')
  } 

  const onSocial = () =>{
    setCurrentSection('social')
  } 


  return (
    <SafeAreaView style={styles.container}>
      {/* Switch statement to render content based on currentSection */}
      {(() => {
        switch (currentSection) {
          case 'education':
            return (
              <View style={styles.container}>
               <TouchableOpacity
                    onPress={onName}
                    style={[styles.button, 
                    { height: '100%', width: '50%', border: '1px solid black', left: 0,
                    position: 'absolute', opacity: 0}]}
                  >
                </TouchableOpacity>

                  <View style = {styles.educationContainer}>
                    <Text style={[[styles.headText, styles.wtext], 
                    { marginTop: 10, marginBottom: 10, marginLeft: 20 }
                    ]}>
                      Education: 
                    </Text>
                    <View style ={styles.hr}></View>
                    <Text style={[styles.year, styles.wtext]}>
                      Year: 2007- 2013 
                    </Text>
                    <Text style={[styles.year, styles.wtext]}>
                    School: {resumeData.elemSchool}
                    </Text>
                    <View style ={styles.hr2}></View>

                    <Text style={[styles.year, styles.wtext]}>
                      Year: 2013 - 2017 
                    </Text>
                    <Text style={[styles.year, styles.wtext]}>
                    School: {resumeData.highSchool}
                    </Text>

                    <Text style={[styles.year, styles.wtext]}>
                      Year: 2017 - 2019 
                    </Text>
                    <Text style={[styles.year, styles.wtext]}>
                    School: {resumeData.shSchool}
                    </Text>

                     <Text style={[styles.year, styles.wtext]}>
                      Year: 2019 - 0000 
                    </Text>
                     <Text style={[styles.year, styles.wtext]}>
                    School: {resumeData.college}
                    </Text>
                  </View>
                
                

                <TouchableOpacity
                    onPress={onProject1}
                    style={[styles.button, 
                    { height: '100%', width: '50%', border: '1px solid black', right: 0,
                    position: 'absolute', opacity: 0}]}
                    >
                 </TouchableOpacity>
              </View>
            );
          case 'project1':
             return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={onEducation}
                    style={[styles.button, 
                    { height: '100%', width: '50%', border: '1px solid black', left: 0,
                    position: 'absolute', opacity: 0}]}
                  >
                </TouchableOpacity>

                <Avatar.Image  size={250} source={require( "assets/rock-paper.PNG" )} />
                <Text style={[styles.headText, styles.textCenter, styles.wtext]}>
                  Rock, Paper, Scissors  Game
                </Text>
                <Text style={[styles.secondText, styles.textCenter, styles.wtext]}>
                    a simply rock,paper, scissor that have smooth animation.
                </Text>

                <TouchableOpacity
                    onPress={onProject2}
                    style={[styles.button, 
                    { height: '100%', width: '50%', border: '1px solid black', right: 0,
                    position: 'absolute', opacity: 0}]}
                    >
                 </TouchableOpacity>
            </View>
            );

          case 'project2':
             return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={onProject1}
                    style={[styles.button, 
                    { height: '100%', width: '50%', border: '1px solid black', left: 0,
                    position: 'absolute',opacity: 0}]}
                  >
                </TouchableOpacity>

                <Avatar.Image  size={250} source={require( "assets/tip-calc.PNG" )} />
                <Text style={[styles.headText, styles.textCenter, styles.wtext]}>
                  Splitter
                </Text>
                <Text style={[styles.secondText, styles.textCenter, styles.wtext]}>
                    interactive tip splitter calculator, that help on dividing tip
                </Text>

                <TouchableOpacity
                    onPress={onSocial}
                    style={[styles.button, 
                    { height: '100%', width: '50%', border: '1px solid black', right: 0,
                    position: 'absolute', opacity: 0}]}
                    >
                 </TouchableOpacity>
            </View>
            );

          case 'social':
            return (
              <View style={styles.container}>
               <TouchableOpacity
                    onPress={onProject2}
                    style={[styles.button, 
                    { height: '100%', width: '50%', border: '1px solid black', left: 0,
                    position: 'absolute', opacity: 0}]}
                  >
                </TouchableOpacity>

                  <View style = {styles.educationContainer}>
                    <Text style={[[styles.headText, styles.wtext], 
                    { marginTop: 10, marginBottom: 10, marginLeft: 20 }
                    ]}>
                      Contacts: 
                    </Text>
                    <View style ={styles.hr}></View>
                     <Text style={[styles.year, styles.wtext]}>
                      Instagram:
                    </Text>
                    <Text style={[styles.school, styles.wtext]}>
                      @co_maniel
                    </Text>
                    <View style ={styles.hr2}></View>

                     <Text style={[styles.year, styles.wtext]}>
                      Facebook:
                    </Text>
                     <Text style={[styles.school, styles.wtext]}>
                    Maniel Melco
                    </Text>
                    <Text style={[styles.year, styles.wtext]}>
                      Github:
                    </Text>
                    <Text style={[styles.school, styles.wtext]}>
                    melco10
                    </Text>

                  
                  </View>
                
                

                <TouchableOpacity
                    onPress={onName}
                    style={[styles.button, 
                    { height: '100%', width: '50%', border: '1px solid black', right: 0,
                    position: 'absolute',opacity: 0}]}
                    >
                 </TouchableOpacity>
              </View>
            );


          default:
             return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={onSocial}
                    style={[styles.button, 
                    { height: '100%', width: '50%', border: '1px solid black', left: 0,
                    position: 'absolute', opacity: 0}]}
                  >
                </TouchableOpacity>

                <Avatar.Image  size={250} source={require( "assets/avatar.JPG" )} />
                <Text style={[styles.headText, styles.textCenter, styles.wtext]}>
                  {resumeData.name}
                </Text>
                <Text style={[styles.secondText, styles.textCenter, styles.wtext]}>
                    {resumeData.course}
                </Text>

                <TouchableOpacity
                    onPress={onEducation}
                    style={[styles.button, 
                    { height: '100%', width: '50%', border: '1px solid black', right: 0,
                    position: 'absolute', opacity: 0}]}
                    >
                 </TouchableOpacity>
            </View>
            );
        }
      })()}
     
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1B1A55',
    alignItems: 'center',
  },
  wtext: {
    color: 'white'
  },
  textCenter: {
    textAlign: 'center',
  },
  headText: {
    fontWeight: 600,
    fontSize: 25,
    marginTop:10
  },
  secondText: {
    fontWeight: 300,
    fontSize:20,
    margin: 10
  },
  hr:{
    backgroundColor: '#070F2B',
    width: 250,
    height: 2,
    margin:5,
  },
   year: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 0,
    // Additional styles for year if needed
  },
  school: {
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  educationContainer :{
    border: 1,
    width: 300,
    padding: 20,
    margin: 15,
    backgroundColor: '#9290C3',
  }
});


