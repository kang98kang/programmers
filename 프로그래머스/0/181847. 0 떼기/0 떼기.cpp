#include <string>
#include <vector>

using namespace std;

string solution(string n_str) {
    size_t pos = n_str.find_first_not_of('0');
    return n_str.substr(pos);
}