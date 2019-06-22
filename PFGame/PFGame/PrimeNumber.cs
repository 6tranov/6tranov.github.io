using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PFGame
{
    class PrimeNumber
    {
        public static List<int> GetPrimeNumsUntil(int untilN)
        {
            bool[] isComposit = new bool[untilN];//falseが素数とする。

            isComposit[0] = true;
            isComposit[1] = true;

            for (int n = 2; n <= Math.Sqrt(isComposit.Length); n++)
            {
                if (!isComposit[n]) SetComposit(n);
            }

            List<int> primeNums = new List<int>();

            for (int n = 0; n < isComposit.Length; n++)
            {
                if (!isComposit[n]) primeNums.Add(n);
            }

            return primeNums;

            void SetComposit(int primeNum)//primeNumの倍数を合成数とする。
            {
                for (int n = primeNum * primeNum; n < isComposit.Length; n += primeNum)
                {
                    isComposit[n] = true;
                }
            }
        }
    }
}
