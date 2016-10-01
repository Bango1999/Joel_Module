//place your c++ in here!
#include <iostream>
using namespace std;

int main(int argc, char * argv[]) {
	cout << "Hell, World." << endl;
	cout << "This function has " << argc-1 << " parameters:" << endl;
	for (int i = 1; i < argc; i++) {
		cout << argv[i] << endl;
	}
	int x = 0;
	cin >> x;
	cout << "x=" << x << endl;
	return 0;
}
