initSidebarItems({"enum":[["AtomicPropositionOrPlaceholderSerializable",""],["CompiledInputSerializable","CompiledInput indicates which value to pass to PredicateCall as input of predicate For example,parent_property.inputs[0].inputs[1] is NormalInput andinput_index is 0 and children is [1]."],["LogicalConnectiveSerializable",""],["PredicateCallSerializable",""],["PredicateTypeSerializable",""],["VarTypeSerializable",""],["VarValue",""]],"fn":[["atomic_executable_from_address",""],["base_atomic_executable_from_address",""],["compile_from_json",""],["deciable_executable_from_address",""],["executable_from_compiled",""],["load_predicate_json",""],["logical_connective_executable_from_address",""]],"struct":[["AtomicPredicateCallSerializable","e.g. IsValidSignature()"],["AtomicPropositionSerializable",""],["CompiledPredicateCallSerializable","For predicates dynamic linking e.g. Confsig() user defined predicate"],["CompiledPredicateSerializable","Compiled Property definition"],["ConstantInputSerializable",""],["ConstantVariableSerializable",""],["InputPredicateCallSerializable","e.g. a() of \"def Foo(a) := a()\""],["IntermediateCompiledPredicateSerializable","IntermediateCompiledPredicate is core of compilation which has only atomic propositions as its inputs. When we have for a in B() {Foo(a) and Bar(a)}, \"for a in B() {...}\" and \"Foo(a) and Bar(a)\" are IntermediateCompiledPredicate."],["LabelInputSerializable",""],["NormalInputSerializable",""],["SelfInputSerializable",""],["VariableInputSerializable",""],["VariablePredicateCallSerializable","e.g. su() of \"def Foo(a) := with SU(a) as su {su()}\""]]});