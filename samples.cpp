#include <algorithm>
#include <cstdio>
#include <iostream>
#include <set>
#include <string>

#define AVG 0
#define MIN 1
#define MAX 2

using namespace std;

int n, v[100000], t[100000], s[10000];

int avg(bool lt, int invl) {
  int res = 0;
  double sum;
  int cnt;

  for (int i = 1; i < n; ++i) {
    int idx = lower_bound(t, t + i, t[i] - invl) - t;
    cnt = i - idx;
    if (!cnt)
      continue;
    sum = idx ? s[i - 1] - s[idx - 1] : s[i - 1];

    res += lt && v[i] < sum / cnt;
    res += !lt && v[i] > sum / cnt;
  }

  return res;
}

/*
 * 21. binary search to find start of interval is log(n), which is better than
 * linear search from previous start of interval or new end of interval
 * 22. how many items are in interval
 * 25. if interval's start moved to right, recalculate sum
 */

int maxS(bool lt, int invl) { return 2; }

int minS(bool lt, int invl) {
  int res = 0;
  multiset<int> vals;

  return res;
}

int main(void) {
  scanf("%d", &n);
  for (int i = 0; i < n; ++i) {
    scanf("%d %d", &t[i], &v[i]);
    s[i] = i ? s[i - 1] + v[i] : v[i];
  }

  int c;
  scanf("%d\n", &c);
  while (c--) {
    int fun, invl;

    string s;
    getline(cin, s);
    bool lt = s[0] == 'l';
    sscanf(s.c_str() + 7, "%d", &invl);

    int res = 0;
    if (s[4] == 'v')
      res = avg(lt, invl);
    else if (s[4] == 'a')
      res = maxS(lt, invl);
    else
      res = minS(lt, invl);

    printf("%d\n", res);
  }
  return 0;
}