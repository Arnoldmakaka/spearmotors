{name - Spears Motors
email - spearmotorslimited
passcode - spearmotors77@limited}


-add Car(page)
	3 
	chassis
	year of manufacture
	brand
	number plate
	4 pictures f b sides
request for service
	-View
		dropdown
	predifned{car servoce, repa of shocks, other}
		- field 
			-description 
			two button {cancel, submitservice } - email forward to them
help
	-textbox{ what i want}
		two button {cancel, submitservice }
		whatshelp line
tips
	-page
	how to maint
	i check tire pressure
	2 insert the ignition
	3. half tnk of the fuel
	4 do serive on time

	top left
		-


const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => {
	return(
		<RootStack.Navigator headerMode="none">
			{userToken ? (
				<RootStack.Screen name="Auth" component={AuthStackScreen} options={{animationEnabled: false}} />	
			) : (
				//<RootStack.Screen name="App" component={DrawerNavigatorScreen}/>
				<RootStack.Screen name="Auth" component={AuthStackScreen} options={{animationEnabled: false}} />
				//<RootStack.Screen name="Auth" component={AuthStackScreen} options={{animationEnabled: false}} />
			)}
		</RootStack.Navigator>
	);
}

export default () => {

	const [isLoading, setIsLoading] = React.useState(true);
	const [userToken, setUserToken] = React.useState(null);

	const authContext = React.useMemo(() => {
		return {
			signIn: () => {
				setIsLoading(false);
				setUserToken("boom");	
			},
			signUp: () => {
				setIsLoading(false);
				setUserToken("boom");	
			},
			signOut: () => {
				setIsLoading(false);
				setUserToken(null);	
			},
			passwordReset: (email) => {
  				return firebase.auth().sendPasswordResetEmail(email)
			},
		};
	}, []);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	if(isLoading){
		return(
			<View style={{flex: 1, justifyContent: 'center', backgroundColor: '#000000', alignItems: 'center',}}>
				<ActivityIndicator size="large" color="#fff" />
			</View>
		);
	}

	return(
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<RootStackScreen userToken={userToken} />
			</NavigationContainer>
		</AuthContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',  
	}
})

this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      if(user){
        //todo wen logged in
        this.props.navigation.navigate('Todash');
      }
      else {
        //todo wen not logged in
        this.props.navigation.navigate('Welcomenavigate');
      }
    });
  }


  <AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<RootStackScreen userToken={userToken} />
			</NavigationContainer>
		</AuthContext.Provider>


		<ImageBackground source={{uri: 'data:image/jpeg;base64,' + pic}} style={{flex: 1, resize: 'cover', }}>
	                							<View style={{flex: 1, height: 120, justifyContent: 'center', alignItems: 'center',}}>
	                							</View>
	                						</ImageBackground>