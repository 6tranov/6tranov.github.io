using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PFGame
{
    class Quiz
    {
        public int Number { get; private set; }
        public List<int> Factors { get; private set; }
        private static readonly int factorsNum = 2;
        private static readonly List<int> primeNums = PrimeNumber.GetPrimeNumsUntil(25);
        private static readonly Random r = new Random();

        public Quiz()
        {
            this.Number = 1;
            this.Factors = new List<int>();

            SetFields();
        }

        private void SetFields()
        {
            for (int nThFactor = 0; nThFactor < factorsNum; nThFactor++)
            {
                var factor = primeNums[r.Next(primeNums.Count)];
                if (!Factors.Contains(factor))
                {
                    Factors.Add(factor);
                }
                Number *= factor;
            }
        }
    }
}
