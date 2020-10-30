#include <algorithm>
#include <cstdio>
#include <iostream>
#include <stdio.h>
#include <string>

#define AVG 0
#define MIN 1
#define MAX 2

using namespace std;

int n, v[100000], t[100000];

int avg(bool lt, int invl) {
  int res = 0;
  double sum = 0;
  int cnt, *l = t, *pl = t;

  for (int i = 0; i < n; ++i) {
    l = lower_bound(t, t + i, t[i] - invl);
    cnt = &t[i] - l;
    if (!cnt)
      continue;
    if (l > pl)
      ;

    res += lt && v[i] < sum / cnt;
    res += !lt && v[i] > sum / cnt;
  }

  return res;
}

int maxS(bool lt, int invl) { return 1; }

int minS(bool lt, int invl) { return 1; }

int main(void) {
  scanf("%d", &n);
  for (int i = 0; i < n; ++i)
    scanf("%d %d", &t[i], &v[i]);

  int c;
  scanf("%d", &c);
  while (c--) {
    int fun, invl;

    string s;
    getline(cin, s);
    bool lt = s[0] == 'l';
    sscanf(s.c_str() + 7, "%d", &invl);

    int res;
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