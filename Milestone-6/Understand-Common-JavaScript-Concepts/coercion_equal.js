/**
    Double Equals (==) vs Triple Equals (===)

    ### **Double Equals (`==`) - Loose Equality**

        - **Performs type coercion** (implicit conversion) if the values being compared are of different types.
        - It tries to **convert the values** to the same type before comparing them.
        - If the types are the same, it simply compares the values.


    ### **Triple Equals (`===`) - Strict Equality**

        - **Does not perform type coercion**.
        - It **compares both the value and the type** without converting them.
        - If the types are different, it immediately returns `false`.
 */