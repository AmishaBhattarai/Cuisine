package com.project.cuisine_compass.account;

import jakarta.validation.constraints.NotNull;
import org.mapstruct.*;

@Mapper(componentModel = "spring",
        injectionStrategy = InjectionStrategy.CONSTRUCTOR,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED
)
public interface AccountMapper {

    AccountDto accountToAccountDto(@NotNull Account account);

    Account accountDtoToAccount(@NotNull AccountDto accountDto);

}
